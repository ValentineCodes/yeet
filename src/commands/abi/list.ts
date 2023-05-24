import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";

const store = new Conf();

export default class AbiList extends Command {
  static aliases: string[] = ["abi-list"];

  static description = "lists all stored abi names";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    console.log(`Total: ${chalk.bold.underline(store.size)}`);
    const _store = store.store;
    console.log(Object.keys(_store));
  }
}
