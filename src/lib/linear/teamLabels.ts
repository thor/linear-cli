import { LinearClient, LinearGraphQLClient, Team } from '@linear/sdk';
import ora from 'ora';
import { handleError } from '../handleError.js';
import {
  TeamIssueLabelsQuery,
  TeamIssueLabelsQueryVariables,
} from '../../generated/_documents.js';

const gql = String.raw;
export const teamIssueLabelQuery = gql`
  fragment Label on IssueLabel {
    id
    name
    color
    description
    team {
      id
      name
    }
    createdAt
    updatedAt
  }
  query teamIssueLabels(
    $filter: IssueLabelFilter
    $first: Int
    $after: String
    $before: String
    $orderBy: PaginationOrderBy
    $includeArchived: Boolean
    $last: Int
  ) {
    issueLabels(
      filter: $filter
      first: $first
      after: $after
      before: $before
      orderBy: $orderBy
      includeArchived: $includeArchived
      last: $last
    ) {
      nodes {
        ...Label
        parent {
          ...Label
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

export const experiment = (client: LinearGraphQLClient) => {
  return async (team: Team) => {
    const spinner = ora().start();
    // const data = await client
    //   .rawRequest<TeamIssueLabelsQuery, TeamIssueLabelsQueryVariables>(
    //     teamIssueLabelQuery
    //     // { first: 250, teamId: team.id }
    //   )
    //   .catch((error) => handleError(error))
    //   .finally(() => spinner.stop());
  };
};

/** Get one specific issue */
export const teamLabels = (linear: LinearClient) => {
  return async (
    team: Team
    //{ withComments = false, historyCount = 1 }: IssueQueryOptions = {}
  ) => {
    const spinner = ora().start();

    // const data = await linear
    //   .issueLabels({
    //     first: 250,
    //     filter: {
    //       team: {
    //         id: { eq: team.id },
    //       },
    //     },
    //   })
    //   .catch(handleError)
    //   .finally(() => spinner.stop());

    const {
      data: { issueLabels: data } = { issueLabels: null},
    } = await linear.client
      .rawRequest<TeamIssueLabelsQuery, TeamIssueLabelsQueryVariables>(
        teamIssueLabelQuery,
        {
          first: 250,
          filter: {
            team: {
              id: { eq: team.id },
            },
          },
        }
      )
      .catch((error) => handleError(error))
      .finally(() => spinner.stop());

    if (!data || !data.nodes) {
      throw new Error('Couldnt fetch issues belonging to team');
    }

    if (data.pageInfo.hasNextPage) {
      spinner.fail('Additional page available, pagination needs to be implemented');
    }

    return data;
  };
};
