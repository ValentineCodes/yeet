import { Command } from "@oclif/core";
import { getProvider } from "../../lib/provider";
import { Provider } from "ethers";
import * as chalk from "chalk";
import { providerNetworkFlags } from "../../lib/commonFlags";

export default class BlockNumber extends Command {
  static aliases: string[] = ["block-number"];
  static description = "gets latest block number. default network: localhost";

  static examples = [
    "<%= config.bin %> <%= command.id %> [NETWORK NAME]",
    "<%= config.bin %> <%= command.id %> --network [RPC URL]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(BlockNumber);

    let provider: Provider = getProvider(flags);

    const blockNumber = await provider.getBlockNumber();
    this.log(`${chalk.green.underline.bold(`${blockNumber}`)}`);
  }
}
