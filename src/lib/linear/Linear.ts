import { LinearClient } from '@linear/sdk';
import { User } from '../configSchema.js';
import { issuesAllTeams } from './issuesAllTeams.js';
import { issuesFromTeams } from './issuesFromTeam.js';
import { issue } from './issue.js';
import { allTeams } from './allTeams.js';
import { issueWorkflowStates } from './issueWorkflowStates.js';
import { teamWorkflowStates } from './teamWorkflowStates.js';
import { issuesWithStatus } from './issuesWithStatus.js';
import { assignedIssues } from './assignedIssues.js';
import { searchIssues } from './searchIssues.js';
import { teamLabels } from './teamLabels.js';

type UserInfo = {
  apiKey: string;
  currentUser: User;
};

/**
 * Custom Linear client
 */
export class Linear extends LinearClient {
  currentUser: User = (null as unknown) as User;

  constructor({ apiKey, currentUser }: UserInfo) {
    super({ apiKey });

    this.currentUser = currentUser;
  }

  get query() {
    return {
      allTeams: allTeams(this.client),
      assignedIssues: assignedIssues(this.client),
      issue: issue(this.client),
      issueWorkflowStates: issueWorkflowStates(this.client),
      issuesAllTeams: issuesAllTeams(this.client),
      issuesFromTeam: issuesFromTeams(this.client),
      issuesWithStatus: issuesWithStatus(this.client),
      searchIssues: searchIssues(this.client),
      teamWorkflowStates: teamWorkflowStates(this.client),
      teamLabels: teamLabels(this),
    };
  }
}
