import { Args, Command } from "@oclif/core";
import { BigNumberish, Provider } from "ethers";
import * as chalk from "chalk";
import { getProvider } from "../../lib/provider";
import { providerNetworkFlags } from "../../lib/flags/networkFlags";
import { ethUnitFlags } from "../../lib/flags/cryptoUnitFlags";
import { formatUnits } from "../../lib/cryptoUnitConverter";

export default class AddressBalance extends Command {
  static aliases: string[] = ["account-balance"];

  static description =
    "gets address balance of address or ens. default network: localhost";

  static examples = [
    "<%= config.bin %> <%= command.id %> <address|ens> --mainnet",
    "<%= config.bin %> <%= command.id %> <address|ens> --rpc_url=[PROVIDER_URL]",
    "<%= config.bin %> <%= command.id %> <address|ens> --mainnet --wei",
  ];

  static flags = {
    ...providerNetworkFlags,
    ...ethUnitFlags,
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
    console.log(chalk.green(formatUnits(balance, flags)));
  }
}
