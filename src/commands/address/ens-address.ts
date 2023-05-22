import { Args, Command, Flags } from "@oclif/core";
import { Provider } from "ethers";
import {
  Providers,
  getProviderWithName,
  getProviderWithURL,
} from "../../lib/provider";
import * as chalk from "chalk";
import { networks } from "../../utils/constants";

export default class AddressIndex extends Command {
  static aliases: string[] = ["ens-address"];

  static description = "resolves ens name to it's address on Ethereum mainnet";

  static examples = ["<%= config.bin %> <%= command.id %> address <ens>"];

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
    ens: Args.string({ description: "ENS name", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddressIndex);

    let provider: Provider;

    if (flags.rpc_url) {
      provider = getProviderWithURL(flags.rpc_url);
    } else {
      provider = getProviderWithName(flags.network as keyof Providers);
    }

    const address = await provider.resolveName(args.ens);

    if (address) {
      console.log(chalk.green(address));
    } else {
      this.log("No address");
    }
  }
}
