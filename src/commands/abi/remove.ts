import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";

const store = new Conf();

export default class AbiRemove extends Command {
  static aliases: string[] = ["abi-remove"];

  static description = "removes contract abi";

  static examples = ["<%= config.bin %> <%= command.id %> erc20ABI"];

  static args = {
    name: Args.string({
      description: "abi name in storage",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(AbiRemove);

    if (!store.has(args.name)) {
      throw new Error(`${chalk.bold.underline(args.name)} does not exist!`);
    }
    store.delete(args.name);
    console.log(`${chalk.bold.underline(args.name)} deleted successfully✅`);
  }
}
