import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";
import * as fs from "fs";

const store = new Conf();

export default class AbiUpdate extends Command {
  static aliases: string[] = ["abi-update"];

  static description = "updates contract abi";

  static examples = ["<%= config.bin %> <%= command.id %> <name> <abiPath>"];

  static args = {
    name: Args.string({
      description: "abi name to update",
      required: true,
    }),
    abiPath: Args.string({
      description: "path to abi",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(AbiUpdate);

    const abi = fs.readFileSync(args.abiPath, { encoding: "utf8" });

    store.set(args.name, abi);
    console.log(`${chalk.bold.underline(args.name)} updated successfully✅`);
  }
}
