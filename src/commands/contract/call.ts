import { Args, Command } from "@oclif/core";
import { InterfaceAbi, Provider, ethers } from "ethers";
import Conf from "conf";
import * as repl from "repl";
import * as chalk from "chalk";

import { providerNetworkFlags } from "../../lib/flags/networkFlags";
import { getProvider } from "../../lib/provider";

const store = new Conf();
export default class ContractCall extends Command {
  static aliases: string[] = ["contract-call"];
  static description = "calls methods of specified contract";

  static examples = [
    "<%= config.bin %> <%= command.id %> <address> <abi> --mainnet",
    "> await contract.name()",
    "> await contract.getterFunction()",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    address: Args.string({ description: "contract address", required: true }),
    abi: Args.string({
      description: "abi name saved using `yeet abi-add`",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ContractCall);

    let provider: Provider = getProvider(flags);

    if (!ethers.isAddress(args.address)) {
      console.log("Invalid contract address");
      return;
    }
    if (!store.has(args.abi)) {
      console.log(`${chalk.bold.underline(args.abi)} does not exist!`);
      return;
    }
    const abi = store.get(args.abi) as InterfaceAbi;
    const contract = new ethers.Contract(args.address, abi, provider);

    repl.start().context.contract = contract;
  }
}
