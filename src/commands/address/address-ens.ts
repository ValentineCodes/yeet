import { Args, Command, Flags } from "@oclif/core";
import chalk = require("chalk");
import { Provider } from "ethers";
import {
  getProviderWithURL,
  getProviderWithName,
  Providers,
} from "../../lib/provider";
import { networks } from "../../utils/constants";

export default class AddressAddressEns extends Command {
  static aliases: string[] = ["address-ens"];

  static description = "gets ens of address";

  static examples = [
    "<%= config.bin %> <%= command.id %> address-ens <address>",
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
    account: Args.string({ description: "account address", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddressAddressEns);

    let provider: Provider;

    if (flags.rpc_url) {
      provider = getProviderWithURL(flags.rpc_url);
    } else {
      provider = getProviderWithName(flags.network as keyof Providers);
    }

    const ens = await provider.lookupAddress(args.account);

    if (ens) {
      console.log(chalk.green(ens));
    } else {
      this.log("No ENS");
    }
  }
}
