import { Args, Command, Flags } from "@oclif/core";
import {
  Providers,
  getProviderWithURL,
  getProviderWithName,
} from "../../lib/provider";
import { Provider } from "ethers";
import * as chalk from "chalk";
import { networks } from "../../utils/constants";

export default class BlockNumber extends Command {
  static aliases: string[] = ["block-number", "bn"];
  static description =
    "gets latest block number of specified network(default: mainnet)";

  static examples = [
    "<%= config.bin %> <%= command.id %> [NETWORK NAME]",
    "<%= config.bin %> <%= command.id %> --network [RPC URL]",
  ];

  static flags = {
    rpc_url: Flags.string({
      description: "network provider rpc url",
    }),
  };

  static args = {
    network: Args.string({
      description: "network to read from",
      options: networks,
      default: "mainnet",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(BlockNumber);

    let provider: Provider = getProviderWithName(
      args.network as keyof Providers
    );

    if (flags.rpc_url) {
      provider = getProviderWithURL(flags.rpc_url);
    } else {
      provider = getProviderWithName(args.network as keyof Providers);
    }

    const blockNumber = await provider.getBlockNumber();
    this.log(`${chalk.green.underline.bold(`${blockNumber}`)}`);
  }
}
