import ora from 'ora'
import Command, { Flags } from '../../../base.js'
import { User } from '@linear/sdk'
import { UsersQueryVariables } from '@linear/sdk/dist/_generated_documents.js'
import dayjs from 'dayjs'
import inquirer from 'inquirer'

export default class UsersSuspendInactive extends Command {
  static override description = 'Suspend user(s) by inactivity'

  static override examples = [
    '<%= config.bin %> <%= command.id %> --no-dry-run',
    '<%= config.bin %> <%= command.id %> --no-dry-run --days 60',
  ]

  static override flags = {
    days: Flags.integer({
      char: 'd',
      default: 90,
      helpValue: "<days of inactivity>",
      description: "Number of days users must've been inactive",
    }),
    'no-dry-run': Flags.boolean({
      default: false,
      description: "To actually perform the suspension of users rather than do a dry-run"
    }),
    force: Flags.boolean({
      char: 'f',
      default: false,
      dependsOn: ['no-dry-run'],
      description: "Skip confirmation prompts and proceed with potentially destructive action",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(UsersSuspendInactive)
    const isDryRun = !flags['no-dry-run'];

    const spinner = ora();

    const targetDate = dayjs().subtract(flags.days, 'days');
    if (!isDryRun && !flags['force']) {
      const proceed = await inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        default: false,
        message: `Are you sure you'd like to disable all users not active in the last ${flags.days} days, i.e. not active since ${targetDate}?`
      });

      if (!proceed.confirm) {
        spinner.warn("Cancelled operation, no users suspended");
        this.exit(1);
      }
    }

    spinner.start(`Fetch all users not active in the last ${flags.days} days`)

    const allUsers: User[] = [];
    let cursor: UsersQueryVariables = {};

    while (true) {
      const users = await this.linear.users({
        filter: {
          active: { eq: true },
        },
        first: 50,
        ...cursor,
      });

      allUsers.push(...users.nodes);

      if (!users.pageInfo.hasNextPage) {
        break;
      }

      cursor = { after: users.pageInfo.endCursor };
    }

    // Get an idea of which users we should be careful with
    const now = dayjs();
    const gatedActivityTime = now.subtract(flags.days, 'days');

    const guestUsers = allUsers.filter((x) => x.guest);
    const orgUsers = allUsers.filter((x) => !x.guest);
    spinner.succeed(`Found ${guestUsers.length} guests and ${orgUsers.length} org. users...`);

    // We don't want to accidentally suspend someone who still seems to be active
    const inactiveUsers = allUsers.filter((x) => dayjs(x.lastSeen) < gatedActivityTime);

    if (inactiveUsers.length == 0) {
      spinner.info(`No inactive users from before ${flags.days} days ago`);
    }

    const suspendedUsers: User[] = [];
    // Go through in sequence to make the output less messy rather than really speedy
    for (let i = 0; i < inactiveUsers.length; i++) {
      const user = inactiveUsers[i];

      const seenAgo = dayjs(user.lastSeen).fromNow();
      if (isDryRun) {
        spinner.info(`Would've suspended ${user.name} (${user.email}, seen ${seenAgo})`);
        continue;
      }

      await this.linear.suspendUser(user.id)
        .then(() => {
          const seenAgo = dayjs(user.lastSeen).fromNow();
          spinner.succeed(`Suspended ${user.name} (${user.email}, seen ${seenAgo})`);
          suspendedUsers.push(user);
        })
        .catch(e => {
          spinner.fail(`Failed to suspend ${user.email}: ${e}`);
        });
    }

    spinner.info(`Suspended ${suspendedUsers.length} users inactive in the last ${flags.days} days`);
  }
}
