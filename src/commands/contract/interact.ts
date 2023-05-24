import { Args, Command, Flags } from "@oclif/core";
import { InterfaceAbi, JsonRpcProvider, Provider, ethers } from "ethers";
import Conf from "conf";
import * as repl from "repl";
import * as chalk from "chalk";

import { providerNetworkFlags } from "../../lib/flags/networkFlags";
import { getProvider } from "../../lib/provider";

const store = new Conf();
export default class ContractCall extends Command {
  static aliases: string[] = ["contract-interact"];
  static description =
    "exposes a `contract` instance in a REPL environment for making contract calls";

  static examples = [
    "<%= config.bin %> <%= command.id %> <address> <abi> --mainnet",
    "> await contract.name()",
    "> await contract.getterFunction()",
    "<%= config.bin %> <%= command.id %> <address> <abi> --signer=[PRIVATE_KEY] --mainnet",
    "> await contract.mint()",
    "> await contract.setterFunction({value: '10000000000000'})",
  ];

  static flags = {
    ...providerNetworkFlags,
    signer: Flags.string({
      char: "s",
      summary: "private key of transaction signer",
      description:
        "if specified, each command will be executed as a transaction",
    }),
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

    if (!ethers.isAddress(args.address)) {
      console.log("Invalid contract address");
      return;
    }
    if (!store.has(args.abi)) {
      console.log(`${chalk.bold.underline(args.abi)} does not exist!`);
      return;
    }

    const abi = store.get(args.abi) as InterfaceAbi;
    const provider = getProvider(flags);

    let contract;

    if (flags.signer) {
      const wallet = new ethers.Wallet(flags.signer).connect(provider);

      contract = new ethers.Contract(args.address, abi, wallet);
    } else {
      contract = new ethers.Contract(args.address, abi, provider);
    }

    repl.start().context.contract = contract;
  }
}
