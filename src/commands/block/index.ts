import { Args, Command } from "@oclif/core";
import { getProvider } from "../../lib/provider";
import { Block, Provider } from "ethers";
import { providerNetworkFlags } from "../../lib/flags/networkFlags";
export default class BlockIndex extends Command {
  static description =
    "gets block object from block number or hash. default network: Localhost";

  static examples = [
    "<%= config.bin %> <%= command.id %> [block-number]",
    "<%= config.bin %> <%= command.id %> [block-number | block-hash] --network [network] --rpc_url [url]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    block_number: Args.string({ description: "block number" }),
  };

  public static enableJsonFlag = true;

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(BlockIndex);

    let provider: Provider = getProvider(flags);

    let blockNumber: number;
    if (args.block_number === undefined) {
      blockNumber = await provider.getBlockNumber();
    } else {
      blockNumber = Number(args.block_number);
    }

    const block: Block | null = await provider.getBlock(blockNumber);

    console.log(block);
  }
}
