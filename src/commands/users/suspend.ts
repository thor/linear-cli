import ora from 'ora'
import Command, { Flags } from '../../base.js'
import { Args } from '@oclif/core'
import { User } from '@linear/sdk'
import { UsersQueryVariables } from '@linear/sdk/dist/_generated_documents.js'
import dayjs from 'dayjs'
import inquirer from 'inquirer'

export default class UsersSuspend extends Command {
  static override args = {
    users: Args.string({ description: 'user emails', required: true }),
  }

  static strict = false

  static override description = 'Suspend user(s) by email or inactivity'

  static override examples = [
    '<%= config.bin %> <%= command.id %> john.doe@example.com',
  ]

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f', description: "Suspend all users without prompting for recently active ones" }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(UsersSuspend)

    const spinner = ora();

    spinner.start(`Lookup ${this.argv.length} users`)

    const allUsers: User[] = [];
    let cursor: UsersQueryVariables = {};

    while (true) {
      const users = await this.linear.users({
        filter: {
          email: { in: this.argv }
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

    if (allUsers.length == 0) {
      spinner.fail();
      this.error("To suspend a user, specify one or more valid e-mail address");
    }

    if (allUsers.length !== this.argv.length) {
      spinner.warn(`Found ${allUsers.length} out of ${this.argv.length} users, proceeding `);
    } else {
      spinner.succeed();
    }


    spinner.start("Suspend users...");
    const suspendedUsers: User[] = [];

    // Get an idea of which users we should be careful with
    const now = dayjs();
    const gatedActivityTime = now.subtract(1, 'month');

    // Go through in sequence to make the output less messy rather than really speedy
    for (let i = 0; i < allUsers.length; i++) {
      const user = allUsers[i];
      const seen = dayjs(user.lastSeen);
      const seenAgo = dayjs(user.lastSeen).fromNow();

      // We don't want to accidentally suspend someone who still seems to be active
      if (!flags.force && seen > gatedActivityTime) {
        const answer = await inquirer.prompt({
          type: "confirm",
          name: "confirm",
          message: `${user.name} was active ${seenAgo}, do you want to suspend them?`,
          default: false
        });
        if (!answer.confirm) {
          spinner.warn(`Skipped ${user.name} (${user.email})`);
          continue;
        }
      }

      await this.linear.suspendUser(user.id)
        .then(() => {
          spinner.succeed(`Suspended ${user.name} (${user.email}, seen ${seenAgo})`);
          suspendedUsers.push(user);
        })
        .catch(e => {
          spinner.fail(`Failed to suspend ${user.email}: ${e}`);
        });
    }

    spinner.info(`Suspended ${suspendedUsers.length} users`);
  }
}
