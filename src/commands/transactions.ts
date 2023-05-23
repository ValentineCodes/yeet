import { Args, Command, Flags } from "@oclif/core";
import { Provider, ethers } from "ethers";
import { getProvider } from "../lib/provider";
import axios from "axios";
import * as chalk from "chalk";
import * as fs from "fs";

import { ETHERSCAN_KEY } from "../utils/constants";
import { getEtherscanDomain } from "../lib/etherscan";
import { etherscanNetworkFlags } from "../lib/flags/networkFlags";

export default class Transactions extends Command {
  static aliases: string[] = ["txs"];

  static description = "lists all past transactions of account";

  static examples = ["<%= config.bin %> <%= command.id %> txs <address|ens>"];

  static flags = {
    ...etherscanNetworkFlags,
    export: Flags.boolean({
      char: "e",
      description:
        "exports transactions to 'transactions.json' file in current directory",
    }),
  };

  static args = {
    account: Args.string({ description: "account address", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Transactions);

    const provider: Provider = getProvider(flags);

    let address;

    if (args.account.includes(".")) {
      address = await provider.resolveName(args.account);
    } else if (ethers.isAddress(args.account)) {
      address = args.account;
    } else {
      throw new Error("Invalid address or ens");
    }

    let domain: string = getEtherscanDomain(flags);

    const { data: transactions } = await axios.get(
      `${domain}/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${ETHERSCAN_KEY}`
    );

    if (flags.export) {
      fs.writeFile(
        "transactions.json",
        JSON.stringify({
          total: transactions.result.length,
          transactions: transactions.result,
        }),
        (error) => {
          if (error) {
            console.log(`Total: ${chalk.green(transactions.result.length)}`);
            console.log(transactions.result);
            throw new Error(JSON.stringify(error));
          } else {
            console.log("Transactions retrieved successfully✅");
            console.log(
              `Written to ${chalk.green.underline.bold("./transactions.json")}`
            );
          }
        }
      );
    } else {
      console.log(`Total: ${chalk.green(transactions.result.length)}`);
      console.log(transactions.result);
    }
  }
}
