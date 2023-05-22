import { Args, Command, Flags } from "@oclif/core";
import { networks } from "../utils/constants";
import { Provider, TransactionResponse } from "ethers";
import {
  getProviderWithURL,
  getProviderWithName,
  Providers,
} from "../lib/provider";

export default class Transaction extends Command {
  static aliases: string[] = ["tx"];
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %> tx <txHash>"];

  static flags = {
    rpc_url: Flags.string({
      description: "network provider rpc url",
    }),
    network: Flags.string({
      char: "n",
      description: "network to read from",
      options: networks,
      default: "mainnet",
    }),
  };

  static args = {
    txHash: Args.string({ description: "transaction hash", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Transaction);

    let provider: Provider;

    if (flags.rpc_url) {
      provider = getProviderWithURL(flags.rpc_url);
    } else {
      provider = getProviderWithName(flags.network as keyof Providers);
    }

    const transaction: TransactionResponse | null =
      await provider.getTransaction(args.txHash);

    console.log(transaction);
  }
}
