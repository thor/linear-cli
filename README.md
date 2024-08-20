## Linear CLI

A CLI for [Linear](https://linear.app/) that allows you to quickly view, create and update issues.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@egcli/lr.svg)](https://npmjs.org/package/@egcli/lr)
[![Downloads/week](https://img.shields.io/npm/dw/@egcli/lr.svg)](https://npmjs.org/package/@egcli/lr)
[![License](https://img.shields.io/npm/l/linear-cli.svg)](https://github.com/egodon/linear-cli/blob/master/package.json)

> [!NOTE]
>
> This CLI is a fork of the original [linear-cli](https://github.com/evangodon/linear-cli)

# Installation

TBD

<!--
###### Install with npm

```
  $ npm install -g @egcli/lr
```

###### Install with yarn

```
  $ yarn global add @egcli/lr
```
-->

###### Setup API key

```
  $ lr init
```

# Commands

<!-- commands -->
* [`lr c`](#lr-c)
* [`lr cache:refresh`](#lr-cacherefresh)
* [`lr cache:show`](#lr-cacheshow)
* [`lr config:delete`](#lr-configdelete)
* [`lr config:show`](#lr-configshow)
* [`lr create`](#lr-create)
* [`lr i ISSUEID`](#lr-i-issueid)
* [`lr init`](#lr-init)
* [`lr issue ISSUEID`](#lr-issue-issueid)
* [`lr issue:create`](#lr-issuecreate)
* [`lr issue:list`](#lr-issuelist)
* [`lr issue:search QUERY`](#lr-issuesearch-query)
* [`lr issue:start ISSUEID`](#lr-issuestart-issueid)
* [`lr issue:stop ISSUEID`](#lr-issuestop-issueid)
* [`lr issue:update ISSUEID`](#lr-issueupdate-issueid)
* [`lr ls`](#lr-ls)
* [`lr s QUERY`](#lr-s-query)
* [`lr search QUERY`](#lr-search-query)
* [`lr start ISSUEID`](#lr-start-issueid)
* [`lr stop ISSUEID`](#lr-stop-issueid)
* [`lr teams:show`](#lr-teamsshow)
* [`lr teams:sync`](#lr-teamssync)
* [`lr u ISSUEID`](#lr-u-issueid)
* [`lr update ISSUEID`](#lr-update-issueid)
* [`lr users:suspend USERS`](#lr-userssuspend-users)
* [`lr users:suspend:inactive`](#lr-userssuspendinactive)
* [`lr workspace:add`](#lr-workspaceadd)
* [`lr workspace:current`](#lr-workspacecurrent)
* [`lr workspace:switch`](#lr-workspaceswitch)

## `lr c`

Create a new issue

```
USAGE
  $ lr c [-c]

FLAGS
  -c, --copy  Copy issue url to clipboard after creating

DESCRIPTION
  Create a new issue

ALIASES
  $ lr create
  $ lr c
```

## `lr cache:refresh`

Refresh the cache

```
USAGE
  $ lr cache:refresh

DESCRIPTION
  Refresh the cache
```

_See code: [src/commands/cache/refresh.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/cache/refresh.ts)_

## `lr cache:show`

Print the cache file

```
USAGE
  $ lr cache:show [-p]

FLAGS
  -p, --pretty  Pretty print

DESCRIPTION
  Print the cache file
```

_See code: [src/commands/cache/show.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/cache/show.ts)_

## `lr config:delete`

```
USAGE
  $ lr config:delete
```

_See code: [src/commands/config/delete.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/config/delete.ts)_

## `lr config:show`

```
USAGE
  $ lr config:show
```

_See code: [src/commands/config/show.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/config/show.ts)_

## `lr create`

Create a new issue

```
USAGE
  $ lr create [-c]

FLAGS
  -c, --copy  Copy issue url to clipboard after creating

DESCRIPTION
  Create a new issue

ALIASES
  $ lr create
  $ lr c
```

## `lr i ISSUEID`

Show issue info

```
USAGE
  $ lr i ISSUEID [ISSUEIDOPTIONAL] [-d] [-c] [-o]

FLAGS
  -c, --comments     Show issue comments
  -d, --description  Show issue description
  -o, --open         Open issue in web browser

DESCRIPTION
  Show issue info

ALIASES
  $ lr i

EXAMPLES
  $ lr issue LIN-14

  $ lr issue LIN 14

  $ lr issue 14 (looks in default team)
```

## `lr init`

Setup the Linear cli

```
USAGE
  $ lr init

DESCRIPTION
  Setup the Linear cli
```

_See code: [src/commands/init.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/init.ts)_

## `lr issue ISSUEID`

Show issue info

```
USAGE
  $ lr issue ISSUEID [ISSUEIDOPTIONAL] [-d] [-c] [-o]

FLAGS
  -c, --comments     Show issue comments
  -d, --description  Show issue description
  -o, --open         Open issue in web browser

DESCRIPTION
  Show issue info

ALIASES
  $ lr i

EXAMPLES
  $ lr issue LIN-14

  $ lr issue LIN 14

  $ lr issue 14 (looks in default team)
```

_See code: [src/commands/issue/index.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/issue/index.ts)_

## `lr issue:create`

Create a new issue

```
USAGE
  $ lr issue:create [-c]

FLAGS
  -c, --copy  Copy issue url to clipboard after creating

DESCRIPTION
  Create a new issue

ALIASES
  $ lr create
  $ lr c
```

_See code: [src/commands/issue/create.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/issue/create.ts)_

## `lr issue:list`

List issues

```
USAGE
  $ lr issue:list [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [-x | --columns
    <value>] [--no-header | ] [--sort <value>] [-m] [-t <value> | -a] [-u | [-s <value> | ]]

FLAGS
  -a, --all              List issues from all teams
  -m, --mine             Only show issues assigned to me
  -s, --status=<value>   Only list issues with provided status
  -t, --team=<value>     List issues from another team
  -u, --uncompleted      Only show uncompleted issues
  -x, --extended         show extra columns
      --columns=<value>  only show provided columns (comma-separated)
      --csv              output is csv format [alias: --output=csv]
      --filter=<value>   filter property by partial string matching, ex: name=foo
      --no-header        hide table header from output
      --no-truncate      do not truncate output to fit screen
      --output=<option>  output in a more machine friendly format
                         <options: csv|json|yaml>
      --sort=<value>     [default: -status] property to sort by (prepend '-' for descending)

DESCRIPTION
  List issues

ALIASES
  $ lr ls
```

_See code: [src/commands/issue/list.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/issue/list.ts)_

## `lr issue:search QUERY`

describe the command here

```
USAGE
  $ lr issue:search QUERY

DESCRIPTION
  describe the command here

ALIASES
  $ lr search
  $ lr s
```

_See code: [src/commands/issue/search.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/issue/search.ts)_

## `lr issue:start ISSUEID`

Change status of issue to "In progress" and assign to yourself.

```
USAGE
  $ lr issue:start ISSUEID [ISSUEIDOPTIONAL] [-c]

FLAGS
  -c, --copy-branch  copy git branch to clip-board

DESCRIPTION
  Change status of issue to "In progress" and assign to yourself.

ALIASES
  $ lr start
  $ lr s
```

_See code: [src/commands/issue/start.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/issue/start.ts)_

## `lr issue:stop ISSUEID`

Return issue to preview state

```
USAGE
  $ lr issue:stop ISSUEID [ISSUEIDOPTIONAL] [-u]

FLAGS
  -u, --unassign  Unassign issue from yourself

DESCRIPTION
  Return issue to preview state

ALIASES
  $ lr stop
```

_See code: [src/commands/issue/stop.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/issue/stop.ts)_

## `lr issue:update ISSUEID`

Update an issue

```
USAGE
  $ lr issue:update ISSUEID [ISSUEIDOPTIONAL] [-p title|description|status]

FLAGS
  -p, --property=<option>  Property to modify
                           <options: title|description|status>

DESCRIPTION
  Update an issue

ALIASES
  $ lr update
  $ lr u
```

_See code: [src/commands/issue/update.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/issue/update.ts)_

## `lr ls`

List issues

```
USAGE
  $ lr ls [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [-x | --columns
    <value>] [--no-header | ] [--sort <value>] [-m] [-t <value> | -a] [-u | [-s <value> | ]]

FLAGS
  -a, --all              List issues from all teams
  -m, --mine             Only show issues assigned to me
  -s, --status=<value>   Only list issues with provided status
  -t, --team=<value>     List issues from another team
  -u, --uncompleted      Only show uncompleted issues
  -x, --extended         show extra columns
      --columns=<value>  only show provided columns (comma-separated)
      --csv              output is csv format [alias: --output=csv]
      --filter=<value>   filter property by partial string matching, ex: name=foo
      --no-header        hide table header from output
      --no-truncate      do not truncate output to fit screen
      --output=<option>  output in a more machine friendly format
                         <options: csv|json|yaml>
      --sort=<value>     [default: -status] property to sort by (prepend '-' for descending)

DESCRIPTION
  List issues

ALIASES
  $ lr ls
```

## `lr s QUERY`

describe the command here

```
USAGE
  $ lr s QUERY

DESCRIPTION
  describe the command here

ALIASES
  $ lr search
  $ lr s
```

## `lr search QUERY`

describe the command here

```
USAGE
  $ lr search QUERY

DESCRIPTION
  describe the command here

ALIASES
  $ lr search
  $ lr s
```

## `lr start ISSUEID`

Change status of issue to "In progress" and assign to yourself.

```
USAGE
  $ lr start ISSUEID [ISSUEIDOPTIONAL] [-c]

FLAGS
  -c, --copy-branch  copy git branch to clip-board

DESCRIPTION
  Change status of issue to "In progress" and assign to yourself.

ALIASES
  $ lr start
  $ lr s
```

## `lr stop ISSUEID`

Return issue to preview state

```
USAGE
  $ lr stop ISSUEID [ISSUEIDOPTIONAL] [-u]

FLAGS
  -u, --unassign  Unassign issue from yourself

DESCRIPTION
  Return issue to preview state

ALIASES
  $ lr stop
```

## `lr teams:show`

Show teams in this workspace

```
USAGE
  $ lr teams:show [-m]

FLAGS
  -m, --mine  Only show my teams

DESCRIPTION
  Show teams in this workspace
```

_See code: [src/commands/teams/show.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/teams/show.ts)_

## `lr teams:sync`

Synchronise metadata between teams

```
USAGE
  $ lr teams:sync [-s <value>] [-t <value>]

FLAGS
  -s, --source=<value>  Source team shorthand
  -t, --target=<value>  Target team shorthand

DESCRIPTION
  Synchronise metadata between teams
```

_See code: [src/commands/teams/sync.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/teams/sync.ts)_

## `lr u ISSUEID`

Update an issue

```
USAGE
  $ lr u ISSUEID [ISSUEIDOPTIONAL] [-p title|description|status]

FLAGS
  -p, --property=<option>  Property to modify
                           <options: title|description|status>

DESCRIPTION
  Update an issue

ALIASES
  $ lr update
  $ lr u
```

## `lr update ISSUEID`

Update an issue

```
USAGE
  $ lr update ISSUEID [ISSUEIDOPTIONAL] [-p title|description|status]

FLAGS
  -p, --property=<option>  Property to modify
                           <options: title|description|status>

DESCRIPTION
  Update an issue

ALIASES
  $ lr update
  $ lr u
```

## `lr users:suspend USERS`

Suspend user(s) by email or inactivity

```
USAGE
  $ lr users:suspend USERS... [-f]

ARGUMENTS
  USERS...  user emails

FLAGS
  -f, --force  Suspend all users without prompting for confirmation

DESCRIPTION
  Suspend user(s) by email or inactivity

EXAMPLES
  $ lr users:suspend john.doe@example.com
```

_See code: [src/commands/users/suspend.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/users/suspend.ts)_

## `lr users:suspend:inactive`

Suspend user(s) by inactivity

```
USAGE
  $ lr users:suspend:inactive [-d <days of inactivity>] [-f --no-dry-run]

FLAGS
  -d, --days=<days of inactivity>  [default: 90] Number of days users must've been inactive
  -f, --force                      Skip confirmation prompts and proceed with potentially destructive action
      --no-dry-run                 To actually perform the suspension of users rather than do a dry-run

DESCRIPTION
  Suspend user(s) by inactivity

EXAMPLES
  $ lr users:suspend:inactive --no-dry-run

  $ lr users:suspend:inactive --no-dry-run --days 60
```

_See code: [src/commands/users/suspend/inactive.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/users/suspend/inactive.ts)_

## `lr workspace:add`

Add a new workplace

```
USAGE
  $ lr workspace:add

DESCRIPTION
  Add a new workplace
```

_See code: [src/commands/workspace/add.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/workspace/add.ts)_

## `lr workspace:current`

Print current workspace

```
USAGE
  $ lr workspace:current

DESCRIPTION
  Print current workspace
```

_See code: [src/commands/workspace/current.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/workspace/current.ts)_

## `lr workspace:switch`

Switch to another workspace

```
USAGE
  $ lr workspace:switch

DESCRIPTION
  Switch to another workspace
```

_See code: [src/commands/workspace/switch.ts](https://github.com/thor/linear-cli/blob/v0.19.0/src/commands/workspace/switch.ts)_
<!-- commandsstop -->
