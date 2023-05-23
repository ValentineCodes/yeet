import { Args, Command, Flags } from "@oclif/core";
import { Provider, TransactionResponse } from "ethers";
import {
  getProviderWithURL,
  getProviderWithName,
  Providers,
  getProvider,
} from "../lib/provider";
import { providerNetworkFlags } from "../lib/flags/networkFlags";

export default class Transaction extends Command {
  static aliases: string[] = ["tx"];
  static description = "gets transaction object from transaction hash";

  static examples = [
    "<%= config.bin %> <%= command.id %> <txHash> --mainnet",
    "<%= config.bin %> <%= command.id %> <txHash> --rpc_url=[PROVIDER_URL]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    txHash: Args.string({ description: "transaction hash", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Transaction);

    let provider: Provider = getProvider(flags);

    const transaction: TransactionResponse | null =
      await provider.getTransaction(args.txHash);

    console.log(transaction);
  }
}
