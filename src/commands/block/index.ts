import { Args, Command, Flags } from "@oclif/core";
import {
  Providers,
  getProviderWithName,
  getProviderWithURL,
} from "../../lib/provider";
import { Block, Provider } from "ethers";
import * as chalk from "chalk";
import { networks } from "../../utils/constants";
export default class BlockIndex extends Command {
  static description = "describe the command here";

  static examples = [
    "<%= config.bin %> <%= command.id %> [block-number]",
    "<%= config.bin %> <%= command.id %> [block-number | block-hash] --network [network] --rpc_url [url]",
  ];

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
    block_number: Args.string({ description: "block number" }),
  };

  public static enableJsonFlag = true;

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(BlockIndex);

    let provider: Provider;

    if (flags.rpc_url) {
      provider = getProviderWithURL(flags.rpc_url);
    } else {
      provider = getProviderWithName(flags.network as keyof Providers);
    }

    getProviderWithName(flags.network as keyof Providers);

    let blockNumber: number;
    if (args.block_number === undefined) {
      blockNumber = await provider.getBlockNumber();
    } else {
      blockNumber = Number(args.block_number);
    }

    const block: Block | null = await provider.getBlock(blockNumber);

    this.log(`${chalk.hex("#9F2B68")(flags.network.toUpperCase())}`);
    console.log(block);
  }
}
