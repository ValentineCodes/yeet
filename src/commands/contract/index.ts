import { Args, Command, Flags } from "@oclif/core";
import { InterfaceAbi, JsonRpcProvider, Provider, ethers } from "ethers";
import Conf from "conf";
import * as repl from "repl";
import * as chalk from "chalk";

import { providerNetworkFlags } from "../../lib/flags/networkFlags";
import { getProvider } from "../../lib/provider";

const store = new Conf();
export default class ContractIndex extends Command {
  static description =
    "exposes a `contract` instance in a REPL environment for making contract calls";

  static examples = [
    "<%= config.bin %> <%= command.id %> 0xF51CD0d607c82db2B7EB670554C82C276A9549B4 erc20ABI --mainnet",
    "> await contract.name()",
    "> await contract.getterFunction()",
    "<%= config.bin %> <%= command.id %> 0xF51CD0d607c82db2B7EB670554C82C276A9549B4 erc20ABI --private_key=0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e --mainnet",
    "> await contract.mint()",
    "> await contract.setterFunction({value: '10000000000000'})",
  ];

  static flags = {
    ...providerNetworkFlags,
    private_key: Flags.string({
      description: "private key of transaction signer",
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
    const { args, flags } = await this.parse(ContractIndex);

    if (!ethers.isAddress(args.address)) {
      throw new Error("Invalid contract address");
    }
    if (!store.has(args.abi)) {
      throw new Error(`${chalk.bold.underline(args.abi)} does not exist!`);
    }

    const abi = store.get(args.abi) as InterfaceAbi;
    const provider = getProvider(flags);

    let contract;

    if (flags.private_key) {
      const wallet = new ethers.Wallet(flags.private_key).connect(provider);

      contract = new ethers.Contract(args.address, abi, wallet);
    } else {
      contract = new ethers.Contract(args.address, abi, provider);
    }

    repl.start().context.contract = contract;
  }
}
