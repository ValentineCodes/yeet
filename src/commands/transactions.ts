import { Args, Command, Flags } from "@oclif/core";
import { Provider, ethers } from "ethers";
import { Providers, getProviderWithName } from "../lib/provider";
import axios from "axios";
import * as chalk from "chalk";
import * as fs from "fs";

import { ETHERSCAN_KEY } from "../utils/constants";

export default class Transactions extends Command {
  static aliases: string[] = ["txs"];

  static description = "lists all past transactions of account";

  static examples = ["<%= config.bin %> <%= command.id %> txs <address|ens>"];

  static flags = {
    network: Flags.string({
      char: "n",
      description: "network to read from",
      options: ["mainnet", "goerli", "sepolia"],
      default: "mainnet",
    }),
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

    const provider: Provider = getProviderWithName(
      flags.network as keyof Providers
    );

    let address;

    if (args.account.includes(".")) {
      address = await provider.resolveName(args.account);
    } else if (ethers.isAddress(args.account)) {
      address = args.account;
    } else {
      throw new Error("Invalid address or ens");
    }

    let domain: string;
    switch (flags.network) {
      case "goerli":
        domain = "https://api-goerli.etherscan.io";
        break;
      case "sepolia":
        domain = "https://api-sepolia.etherscan.io";
        break;
      default:
        domain = "https://api.etherscan.io";
        break;
    }

    const { data: transactions } = await axios.get(
      `${domain}/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${ETHERSCAN_KEY}`
    );

    this.log(chalk.hex("#9F2B68")(flags.network));

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
