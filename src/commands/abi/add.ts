import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";
import * as fs from "fs";

const store = new Conf();

export default class AbiAdd extends Command {
  static aliases: string[] = ["abi-add"];

  static description = "stores contract abi";

  static examples = [
    "<%= config.bin %> <%= command.id %> erc20ABI ./erc20ABI.json",
  ];

  static args = {
    name: Args.string({
      description: "abi name in storage",
      required: true,
    }),
    abiPath: Args.string({
      description: "path to abi",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(AbiAdd);

    const abi = fs.readFileSync(args.abiPath, { encoding: "utf8" });

    store.set(args.name, abi);
    console.log(`${chalk.bold.underline(args.name)} stored successfully✅`);
  }
}
