import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";

const store = new Conf();

export default class AbiTotal extends Command {
  static aliases: string[] = ["abi-total"];

  static description = "gets total contract abis stored";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    console.log(`${chalk.bold.underline(store.size)} ABIs`);
  }
}
