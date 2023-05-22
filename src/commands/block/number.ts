import { Args, Command, Flags } from "@oclif/core";
import {
  Providers,
  getProviderWithURL,
  getProviderWithName,
} from "../../lib/provider";
import { Provider } from "ethers";
import * as chalk from "chalk";

export default class BlockNumber extends Command {
  static aliases: string[] = ["block-number", "bn"];
  static description =
    "gets latest block number of specified network(default: mainnet)";

  static examples = [
    "<%= config.bin %> <%= command.id %> [NETWORK NAME]",
    "<%= config.bin %> <%= command.id %> --network [RPC URL]",
  ];

  static flags = {
    network: Flags.string({
      char: "n",
      description: "network provider rpc url",
    }),
  };

  static args = {
    network: Args.string({
      description: "network to read from",
      options: [
        "localhost",
        "mainnet",
        "sepolia",
        "goerli",
        "arbitrum",
        "arbitrumGoerli",
        "optimism",
        "optimismGoerli",
        "polygon",
        "polygonMumbai",
      ],
      default: "mainnet",
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(BlockNumber);

    let provider: Provider = getProviderWithName(
      args.network as keyof Providers
    );

    if (flags.network) {
      provider = getProviderWithURL(flags.network);
    } else {
      provider = getProviderWithName(args.network as keyof Providers);
    }

    const blockNumber = await provider.getBlockNumber();
    this.log(`${chalk.green.underline.bold(`${blockNumber}`)}`);
  }
}
