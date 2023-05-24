import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";
import * as fs from "fs";

const store = new Conf();

export default class AbiIndex extends Command {
  static description = "gets abi from storage";

  static examples = ["<%= config.bin %> <%= command.id %> <name>"];

  static args = {
    name: Args.string({
      description: "abi name in storage",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(AbiIndex);

    if (!store.has(args.name)) {
      console.log(`${chalk.bold.underline(args.name)} does not exist!`);
      return;
    }

    console.log(store.get(args.name));
  }
}
