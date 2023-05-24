import { Args, Command } from "@oclif/core";
import { getProvider } from "../../lib/provider";
import { Block, Provider } from "ethers";
import { providerNetworkFlags } from "../../lib/flags/networkFlags";
export default class BlockIndex extends Command {
  static description =
    "gets block object from block number or hash. default network: Localhost";

  static examples = [
    "<%= config.bin %> <%= command.id %> 20 --mainnet",
    "<%= config.bin %> <%= command.id %> 0x720c47720a39b4b2f04ca82420b8272910a7c397710fcb8ed8337f5a007e39ec --rpc_url=[PROVIDER_URL]",
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
