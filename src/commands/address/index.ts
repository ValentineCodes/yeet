import { Args, Command, Flags } from "@oclif/core";
import { Provider } from "ethers";
import { getProviderWithName } from "../../lib/provider";
import * as chalk from "chalk";

export default class AddressIndex extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %> address <ens>"];

  static flags = {};

  static args = {
    ens: Args.string({ description: "ENS name", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddressIndex);

    const provider: Provider = getProviderWithName("mainnet");
    const address = await provider.resolveName(args.ens);
    console.log(chalk.green(address));
  }
}
