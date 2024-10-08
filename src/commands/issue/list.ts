import chalk from 'chalk';
import Command, { Flags } from '../../base.js';
import { render } from '../../components/index.js';

// TODO: These are taken from the older version of cli-ux for the table rendering and should be replaced
const sharedTableFlags = {
  filter: Flags.string({ description: 'filter property by partial string matching, ex: name=foo' }),
  csv: Flags.boolean({ exclusive: ['no-truncate'], description: 'output is csv format [alias: --output=csv]' }),
  output: Flags.string({
    exclusive: ['no-truncate', 'csv'],
    description: 'output in a more machine friendly format',
    options: ['csv', 'json', 'yaml'],
  }),
  extended: Flags.boolean({ exclusive: ['columns'], char: 'x', description: 'show extra columns' }),
  'no-truncate': Flags.boolean({ exclusive: ['csv'], description: 'do not truncate output to fit screen' }),
  'no-header': Flags.boolean({ exclusive: ['csv'], description: 'hide table header from output' }),
}

export const tableFlags = {
  ...sharedTableFlags,
  sort: Flags.string({
    description: "property to sort by (prepend '-' for descending)",
    default: '-status',
  }),
  columns: Flags.string({
    exclusive: ['extended'],
    description: 'only show provided columns (comma-separated)',
  }),
};

export default class IssueList extends Command {
  static description = 'List issues';

  static aliases = ['ls'];

  static hiddenAliases = ['list', 'l'];

  static override flags = {
    ...tableFlags,
    mine: Flags.boolean({ char: 'm', description: 'Only show issues assigned to me' }),
    team: Flags.string({
      char: 't',
      description: 'List issues from another team',
      exclusive: ['all'],
    }),
    status: Flags.string({
      char: 's',
      description: 'Only list issues with provided status',
      exclusive: ['all'],
    }),
    all: Flags.boolean({ char: 'a', description: 'List issues from all teams' }),
    uncompleted: Flags.boolean({
      char: 'u',
      description: 'Only show uncompleted issues',
      exclusive: ['status'],
    }),
  };

  async listAllTeamIssues() {
    const { flags } = await this.parse(IssueList);
    const issues = await this.linear.query.issuesAllTeams();

    render.IssuesTable(issues, { flags });
  }

  async listMyIssues() {
    const { flags } = await this.parse(IssueList);
    const issues = await this.linear.query.assignedIssues();

    render.IssuesTable(issues, { flags });
  }

  async listTeamIssues() {
    const { flags } = await this.parse(IssueList);
    const teamId = flags.team ?? global.currentWorkspace.defaultTeam;
    const issues = await this.linear.query.issuesFromTeam({
      teamId,
      first: 10,
    });

    render.IssuesTable(issues, {
      flags: {
        ...flags,
        team: teamId,
      },
    });
  }

  async listIssuesWithStatus() {
    const { flags } = await this.parse(IssueList);
    const cache = await this.cache.read();

    const teamId = flags.team ?? global.currentWorkspace.defaultTeam;
    const team = cache.teams[teamId.toUpperCase()];

    if (!team) {
      this.log(`Did not find team with key "${teamId}"`);
      this.log(`Teams found in cache:\n-`, Object.keys(cache.teams).join('\n- '));
      this.log(`You can try refreshing the cache with ${chalk.blue('lr cache:refresh')}`);
      return;
    }

    const match = team.states.find((state) =>
      state.name.toLowerCase().includes(String(flags.status).toLowerCase())
    );

    if (!match) {
      this.log(`Did not find any status with string "${flags.status}"\n`);
      this.log(
        `Statuses for team ${teamId} found in cache:\n-`,
        team.states.map((state) => state.name).join('\n- ')
      );
      this.log(`You can try refreshing the cache with ${chalk.blue('lr cache:refresh')}`);
      return;
    }

    const issues = await this.linear.query.issuesWithStatus(match?.id);

    render.IssuesTable(issues, {
      flags: {
        ...flags,
        team: teamId,
      },
    });
  }

  async run() {
    const { flags } = await this.parse(IssueList);

    if (flags.status) {
      this.listIssuesWithStatus();
      return;
    }

    if (flags.mine) {
      await this.listMyIssues();
      return;
    }

    if (flags.all) {
      this.listAllTeamIssues();
      return;
    }

    this.listTeamIssues();
  }
}
