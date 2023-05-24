import { Args, Command } from "@oclif/core";
import { Provider } from "ethers";
import { getProvider } from "../../lib/provider";
import * as chalk from "chalk";
import { providerNetworkFlags } from "../../lib/flags/networkFlags";

export default class AddressIndex extends Command {
  static aliases: string[] = ["ens-address"];

  static description = "gets address of ens";

  static examples = [
    "<%= config.bin %> <%= command.id %> valentineorga.eth --mainnet",
    "<%= config.bin %> <%= command.id %> valentineorga.eth --rpc_url=[PROVIDER_URL]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    ens: Args.string({ description: "ENS name", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddressIndex);

    let provider: Provider = getProvider(flags);

    const address = await provider.resolveName(args.ens);

    if (address) {
      console.log(chalk.green(address));
    } else {
      this.log("No address");
    }
  }
}
