import { Args, Command, Flags } from "@oclif/core";
import { units } from "../../utils/constants";
import { BigNumberish, Provider, ethers } from "ethers";
import * as chalk from "chalk";
import { getProvider } from "../../lib/provider";
import { providerNetworkFlags } from "../../lib/flags/networkFlags";

export default class AddressBalance extends Command {
  static description =
    "gets address balance of address or ens. default network: localhost";

  static examples = [
    "<%= config.bin %> <%= command.id %> address-balance <address>",
  ];

  static flags = {
    ...providerNetworkFlags,
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

    let provider: Provider = getProvider(flags);

    const balance: BigNumberish = await provider.getBalance(args.addressOrens);
    console.log(
      chalk.green(ethers.formatUnits(balance, flags.unit)),
      flags.unit
    );
  }
}
