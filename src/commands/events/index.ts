import { Args, Command, Flags } from "@oclif/core";
import { Provider, ethers } from "ethers";
import axios from "axios";
import * as chalk from "chalk";
import * as fs from "fs";
import { getProvider } from "../../lib/provider";
import { ETHERSCAN_KEY } from "../../utils/constants";
import { getEtherscanDomain } from "../../lib/etherscan";
import { etherscanNetworkFlags } from "../../lib/flags/networkFlags";

export default class EventsIndex extends Command {
  static description = "get past event logs of given address";

  static examples = [
    "<%= config.bin %> <%= command.id %> <account> --from,-f=[block_number] --to,-t=[block_number] --page,-p=[page] --offset,-o=[offset] --network,-n=[network_name] --rpc_url=[url]",
  ];

  static flags = {
    from: Flags.string({ char: "f", description: "start block", default: "0" }),
    to: Flags.string({ char: "t", description: "end block" }),
    page: Flags.string({ char: "p", description: "page number", default: "1" }),
    offset: Flags.string({
      char: "o",
      description: "number of logs per page. Limit: 1000",
      default: "1000",
    }),
    export: Flags.boolean({
      char: "e",
      description: "exports events to 'events.json' file in current directory",
    }),
    ...etherscanNetworkFlags,
  };

  static args = {
    account: Args.string({ description: "account address", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(EventsIndex);

    let provider: Provider = getProvider(flags);

    let address;

    if (args.account.includes(".")) {
      address = await provider.resolveName(args.account);
    } else if (ethers.isAddress(args.account)) {
      address = args.account;
    } else {
      throw new Error("Invalid address or ens");
    }

    let domain: string = getEtherscanDomain(flags);

    const blockNumber = await provider.getBlockNumber();

    const { data: events } = await axios.get(
      `${domain}/api?module=logs&action=getLogs&address=${address}&fromBlock=${
        flags.from
      }&toBlock=${flags.to || blockNumber}&page=${flags.page}&offset=${
        flags.offset
      }&apikey=${ETHERSCAN_KEY}`
    );

    if (flags.export) {
      fs.writeFile(
        "events.json",
        JSON.stringify({
          total: events.result.length,
          events: events.result,
        }),
        (error) => {
          if (error) {
            console.log(`Total: ${chalk.green(events.result.length)}`);
            console.log(events.result);
            throw new Error(JSON.stringify(error));
          } else {
            console.log("Events retrieved successfully✅");
            console.log(
              `Written to ${chalk.green.underline.bold("./events.json")}`
            );
          }
        }
      );
    } else {
      console.log(`Total: ${chalk.green(events.result.length)}`);
      console.log(events.result);
    }
  }
}
