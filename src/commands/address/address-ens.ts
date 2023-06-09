import { Args, Command } from "@oclif/core";
import * as chalk from "chalk";
import { Provider } from "ethers";
import { getProvider } from "../../lib/provider";
import { providerNetworkFlags } from "../../lib/flags/networkFlags";

export default class AddressAddressEns extends Command {
  static aliases: string[] = ["address-ens"];

  static description = "gets ens of address";

  static examples = [
    "<%= config.bin %> <%= command.id %> 0xF51CD0d607c82db2B70B678554c52C266a9D49B6 --mainnet",
    "<%= config.bin %> <%= command.id %> 0xF51CD0d607c82db2B70B678554c52C266a9D49B6 --rpc_url=[PROVIDER_URL]",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    account: Args.string({ description: "account address", required: true }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddressAddressEns);

    let provider: Provider = getProvider(flags);

    const ens = await provider.lookupAddress(args.account);

    if (ens) {
      console.log(chalk.green(ens));
    } else {
      this.log("No ENS");
    }
  }
}
