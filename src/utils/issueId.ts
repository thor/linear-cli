import { Args } from "@oclif/core";

export const issueArgs = {
  issueId: Args.string({ required: true }),
  issueIdOptional: Args.string({ hidden: true, description: 'Use this if you want to split the issue id into two arguments' }),
};

export type IssueArgs = { issueId: string; issueIdOptional?: string };

// TODO: remove any below
type GetIssueId = (args: any | { issueId: string; issueIdOptional?: string }) => string;

export const getIssueId: GetIssueId = (args) => {
  const { issueId, issueIdOptional } = args;

  if (issueId.match(/^\d*$/)) {
    return `${global.currentWorkspace.defaultTeam}-${issueId}`;
  }

  if (issueIdOptional) {
    return `${args.issueId}-${args.issueIdOptional}`;
  }

  return issueId;
};
