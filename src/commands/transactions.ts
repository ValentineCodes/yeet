import { Args, Command, Flags } from "@oclif/core";
import { Provider, ethers } from "ethers";
import { Providers, getProviderWithName } from "../lib/provider";
import axios from "axios";
import { ETHERSCAN_KEY } from "../utils/constants";
import chalk = require("chalk");

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

    let transactions: any;

    switch (flags.network) {
      case "mainnet":
        transactions = await axios.get(
          `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${ETHERSCAN_KEY}`
        );
        break;
      case "goerli":
        transactions = await axios.get(
          `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${ETHERSCAN_KEY}`
        );
        break;
      case "sepolia":
        transactions = await axios.get(
          `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${ETHERSCAN_KEY}`
        );
        break;
    }

    this.log(chalk.hex("#9F2B68")(flags.network));
    console.log(transactions.data.result);
  }
}
