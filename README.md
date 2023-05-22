oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @vc/yeet
$ yeet COMMAND
running command...
$ yeet (--version)
@vc/yeet/0.0.0 darwin-x64 node-v18.11.0
$ yeet --help [COMMAND]
USAGE
  $ yeet COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`yeet hello PERSON`](#yeet-hello-person)
* [`yeet hello world`](#yeet-hello-world)
* [`yeet help [COMMANDS]`](#yeet-help-commands)
* [`yeet plugins`](#yeet-plugins)
* [`yeet plugins:install PLUGIN...`](#yeet-pluginsinstall-plugin)
* [`yeet plugins:inspect PLUGIN...`](#yeet-pluginsinspect-plugin)
* [`yeet plugins:install PLUGIN...`](#yeet-pluginsinstall-plugin-1)
* [`yeet plugins:link PLUGIN`](#yeet-pluginslink-plugin)
* [`yeet plugins:uninstall PLUGIN...`](#yeet-pluginsuninstall-plugin)
* [`yeet plugins:uninstall PLUGIN...`](#yeet-pluginsuninstall-plugin-1)
* [`yeet plugins:uninstall PLUGIN...`](#yeet-pluginsuninstall-plugin-2)
* [`yeet plugins update`](#yeet-plugins-update)

## `yeet hello PERSON`

Say hello

```
USAGE
  $ yeet hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/ValentineCodes/yeet/blob/v0.0.0/dist/commands/hello/index.ts)_

## `yeet hello world`

Say hello world

```
USAGE
  $ yeet hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ yeet hello world
  hello world! (./src/commands/hello/world.ts)
```

## `yeet help [COMMANDS]`

Display help for yeet.

```
USAGE
  $ yeet help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for yeet.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `yeet plugins`

List installed plugins.

```
USAGE
  $ yeet plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ yeet plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `yeet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ yeet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ yeet plugins add

EXAMPLES
  $ yeet plugins:install myplugin 

  $ yeet plugins:install https://github.com/someuser/someplugin

  $ yeet plugins:install someuser/someplugin
```

## `yeet plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ yeet plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ yeet plugins:inspect myplugin
```

## `yeet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ yeet plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ yeet plugins add

EXAMPLES
  $ yeet plugins:install myplugin 

  $ yeet plugins:install https://github.com/someuser/someplugin

  $ yeet plugins:install someuser/someplugin
```

## `yeet plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ yeet plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ yeet plugins:link myplugin
```

## `yeet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ yeet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ yeet plugins unlink
  $ yeet plugins remove
```

## `yeet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ yeet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ yeet plugins unlink
  $ yeet plugins remove
```

## `yeet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ yeet plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ yeet plugins unlink
  $ yeet plugins remove
```

## `yeet plugins update`

Update installed plugins.

```
USAGE
  $ yeet plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
