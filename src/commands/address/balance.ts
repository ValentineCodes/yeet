import { Args, Command, Flags } from "@oclif/core";
import { networks, units } from "../../utils/constants";
import { BigNumberish, Provider, ethers } from "ethers";
import * as chalk from "chalk";
import {
  Providers,
  getProviderWithName,
  getProviderWithURL,
} from "../../lib/provider";

export default class AddressBalance extends Command {
  static aliases: string[] = ["address-balance"];

  static description = "describe the command here";

  static examples = [
    "<%= config.bin %> <%= command.id %> address-balance <address>",
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
    unit: Flags.string({
      description: "conversion unit",
      options: units,
      default: "ether",
    }),
  };

  static args = {
    addressOrens: Args.string({
      description: "account address or ens name",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddressBalance);

    let provider: Provider;

    if (flags.rpc_url) {
      provider = getProviderWithURL(flags.rpc_url);
    } else {
      provider = getProviderWithName(flags.network as keyof Providers);
    }

    const balance: BigNumberish = await provider.getBalance(args.addressOrens);
    console.log(
      chalk.green(ethers.formatUnits(balance, flags.unit)),
      flags.unit
    );
  }
}
