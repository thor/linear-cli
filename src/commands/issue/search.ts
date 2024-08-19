/// <reference path="../../index.d.ts"/>
//
import { cli } from 'cli-ux';
import Command from '../../base.js';
import inquirer from 'inquirer';
import { render } from '../../components/index.js';
import { IssueSearchQuery } from '../../generated/_documents.js';
import { Args } from '@oclif/core';
import autocomplete from 'inquirer-autocomplete-prompt';

inquirer.registerPrompt('autocomplete', autocomplete);

type SearchedIssue = IssueSearchQuery['issueSearch']['nodes'][0];

/**
 * TODO: Debounce requests when searching
 */
export default class IssueSearch extends Command {
  static aliases = ['search', 's'];

  static description = 'describe the command here';

  static args = {
    query: Args.string({required: true})
  };

  async promptSearch() {
    const response = await inquirer.prompt<{
      issue: SearchedIssue;
    }>([
      {
        type: 'autocomplete',
        name: 'issue',
        message: 'Search issues',
        emptyText: 'No issues found',
        pageSize: 20,
        source: async (_: any, input: string) => {
          if (!input) {
            return [];
          }

          const issues = await this.linear.query.searchIssues(input, { noSpinner: true });
          return issues?.map((issue: { identifier: string; title: string; }) => ({
            name: `${issue.identifier} - ${issue.title}`,
            value: issue,
          }));
        },
      },
    ]);

    const selectedIssue = await this.linear.query.issue(response.issue.id);

    render.IssueCard(selectedIssue);
  }

  async searchWithQuery(query: string) {
    const issues = await this.linear.query.searchIssues(query);

    if (issues.length === 0) {
      this.log('No issues found');
      return;
    }

    this.log('');
    cli.table(
      issues,
      {
        identifier: {
          get: (issue) => issue.identifier,
        },
        title: {
          header: 'Status',
          get: (issue) => issue.title,
        },
      },
      {
        printLine: this.log,
        'no-header': true,
      }
    );
  }

  async run() {
    const { args } = await this.parse(IssueSearch);

    if (args.query) {
      await this.searchWithQuery(args.query);
      return;
    }

    await this.promptSearch();
  }
}
