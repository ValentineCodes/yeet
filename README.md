# Table of contents

  <!-- toc -->

- [Table of contents](#table-of-contents)
- [Usage](#usage)
- [Commands](#commands)
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

- [`yeet address-ens ACCOUNT`](#yeet-address-address-ens-account)
- [`yeet address-balance ADDRESSORENS`](#yeet-address-balance-addressorens)
- [`yeet ens-address ENS`](#yeet-address-ens-address-ens)
- [`yeet block [BLOCK_NUMBER]`](#yeet-block-block_number)
- [`yeet block-number`](#yeet-block-number)
- [`yeet events ACCOUNT`](#yeet-events-account)
- [`yeet generateAccount`](#yeet-generateaccount)
- [`yeet help [COMMANDS]`](#yeet-help-commands)
- [`yeet plugins`](#yeet-plugins)
- [`yeet plugins:install PLUGIN...`](#yeet-pluginsinstall-plugin)
- [`yeet plugins:inspect PLUGIN...`](#yeet-pluginsinspect-plugin)
- [`yeet plugins:install PLUGIN...`](#yeet-pluginsinstall-plugin-1)
- [`yeet plugins:link PLUGIN`](#yeet-pluginslink-plugin)
- [`yeet plugins:uninstall PLUGIN...`](#yeet-pluginsuninstall-plugin)
- [`yeet plugins:uninstall PLUGIN...`](#yeet-pluginsuninstall-plugin-1)
- [`yeet plugins:uninstall PLUGIN...`](#yeet-pluginsuninstall-plugin-2)
- [`yeet plugins update`](#yeet-plugins-update)
- [`yeet transaction TXHASH`](#yeet-transaction-txhash)
- [`yeet transactions ACCOUNT`](#yeet-transactions-account)
- [`yeet tx TXHASH`](#yeet-tx-txhash)
- [`yeet txs ACCOUNT`](#yeet-txs-account)

## `yeet address-ens ACCOUNT`

gets ens of address

```
USAGE
  $ yeet address-ens ACCOUNT [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ACCOUNT  account address

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  gets ens of address

ALIASES
  $ yeet address ens

EXAMPLES
  $ yeet address-ens <address>
```

## `yeet address-balance ADDRESSorENS`

gets address balance of address or ens. default network: localhost

```
USAGE
  $ yeet address-balance ADDRESSORENS [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai] [--wei | --kwei | --mwei | --gwei |
    --szabo | --finney | --ether]

ARGUMENTS
  ADDRESSORENS  account address or ens name

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --ether            eth denomination
  --finney           eth denomination
  --goerli           provider network
  --gwei             eth denomination
  --kwei             eth denomination
  --mainnet          provider network
  --mwei             eth denomination
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network
  --szabo            eth denomination
  --wei              eth denomination

DESCRIPTION
  gets address balance of address or ens. default network: localhost

EXAMPLES
  $ yeet address-balance <address>
```

## `yeet address-ens ACCOUNT`

gets ens of address

```
USAGE
  $ yeet address-ens ACCOUNT [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ACCOUNT  account address

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  gets ens of address

ALIASES
  $ yeet address-ens

EXAMPLES
  $ yeet address-ens <address>
```

## `yeet ens-address ENS`

gets address of ens

```
USAGE
  $ yeet ens-address ENS [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum | --arbitrumGoerli
    | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  ENS  ENS name

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  gets address of ens

ALIASES
  $ yeet ens-address

EXAMPLES
  $ yeet ens-address <ens>
```

## `yeet block [BLOCK_NUMBER]`

gets block object from block number or hash. default network: Localhost

```
USAGE
  $ yeet block [BLOCK_NUMBER] [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai] [--json]

ARGUMENTS
  BLOCK_NUMBER  block number

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  gets block object from block number or hash. default network: Localhost

EXAMPLES
  $ yeet block [block-number]

  $ yeet block [block-number | block-hash] --network [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]
```

_See code: [dist/commands/block/index.ts](https://github.com/ValentineCodes/yeet/blob/v0.0.0/dist/commands/block/index.ts)_

## `yeet block-number`

gets latest block number. default network: localhost

```
USAGE
  $ yeet block-number [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum | --arbitrumGoerli |
    --optimism | --optimismGoerli | --polygon | --polygonMumbai]

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  gets latest block number. default network: localhost

ALIASES
  $ yeet block-number

EXAMPLES
  $ yeet block-number [NETWORK NAME]

  $ yeet block-number --network [RPC URL]
```

## `yeet events ACCOUNT`

get past event logs of given address

```
USAGE
  $ yeet events ACCOUNT [-f <value>] [-t <value>] [-p <value>] [-o <value>] [-e] [--mainnet | --goerli |
    --sepolia]

ARGUMENTS
  ACCOUNT  account address

FLAGS
  -e, --export          exports events to 'events.json' file in current directory
  -f, --from=<value>    [default: 0] start block
  -o, --offset=<value>  [default: 1000] number of logs per page. Limit: 1000
  -p, --page=<value>    [default: 1] page number
  -t, --to=<value>      end block
  --goerli              etherscan supported network
  --mainnet             etherscan supported network
  --sepolia             etherscan supported network

DESCRIPTION
  get past event logs of given address

EXAMPLES
  $ yeet events <account> --from,-f=[block_number] --to,-t=[block_number] --page,-p=[page] --offset,-o=[offset] --network,-n=[network_name] --rpc_url=[url]
```

_See code: [dist/commands/events/index.ts](https://github.com/ValentineCodes/yeet/blob/v0.0.0/dist/commands/events/index.ts)_

## `yeet generateAccount`

generates a new random account

```
USAGE
  $ yeet generateAccount [--no-export]

FLAGS
  --no-export  disables export for mnemonic and private key to 'new-wallet.json' file in current directory

DESCRIPTION
  generates a new random account

EXAMPLES
  $ yeet generateAccount
```

_See code: [dist/commands/transactions.ts](https://github.com/ValentineCodes/yeet/blob/v0.0.0/dist/commands/transactions.ts)_

## `yeet tx TXHASH`

gets transaction object from transaction hash

```
USAGE
  $ yeet tx TXHASH [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  TXHASH  transaction hash

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  gets transaction object from transaction hash

ALIASES
  $ yeet tx

EXAMPLES
  $ yeet tx <txHash>
```

## `yeet txs ACCOUNT`

lists all past transactions of account

```
USAGE
  $ yeet txs ACCOUNT [--mainnet | --goerli | --sepolia] [-e]

ARGUMENTS
  ACCOUNT  account address

FLAGS
  -e, --export  exports transactions to 'transactions.json' file in current directory
  --goerli      etherscan supported network
  --mainnet     etherscan supported network
  --sepolia     etherscan supported network

DESCRIPTION
  lists all past transactions of account

ALIASES
  $ yeet txs

EXAMPLES
  $ yeet txs txs <address|ens>
```

_See code: [dist/commands/generateAccount.ts](https://github.com/ValentineCodes/yeet/blob/v0.0.0/dist/commands/generateAccount.ts)_

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

## `yeet transaction TXHASH`

gets transaction object from transaction hash

```
USAGE
  $ yeet transaction TXHASH [--mainnet | --rpc_url <value> |  | --sepolia | --goerli | --arbitrum |
    --arbitrumGoerli | --optimism | --optimismGoerli | --polygon | --polygonMumbai]

ARGUMENTS
  TXHASH  transaction hash

FLAGS
  --arbitrum         provider network
  --arbitrumGoerli   provider network
  --goerli           provider network
  --mainnet          provider network
  --optimism         provider network
  --optimismGoerli   provider network
  --polygon          provider network
  --polygonMumbai    provider network
  --rpc_url=<value>  provider network rpc url
  --sepolia          provider network

DESCRIPTION
  gets transaction object from transaction hash

ALIASES
  $ yeet tx

EXAMPLES
  $ yeet tx <txHash>
```

_See code: [dist/commands/transaction.ts](https://github.com/ValentineCodes/yeet/blob/v0.0.0/dist/commands/transaction.ts)_

## `yeet transactions ACCOUNT`

lists all past transactions of account

```
USAGE
  $ yeet transactions ACCOUNT [--mainnet | --goerli | --sepolia] [-e]

ARGUMENTS
  ACCOUNT  account address

FLAGS
  -e, --export  exports transactions to 'transactions.json' file in current directory
  --goerli      etherscan supported network
  --mainnet     etherscan supported network
  --sepolia     etherscan supported network

DESCRIPTION
  lists all past transactions of account

ALIASES
  $ yeet txs

EXAMPLES
  $ yeet transactions <address|ens>
```

<!-- commandsstop -->
