import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";

interface MethodInput {
  name: string;
  type: string;
}

const store = new Conf();

export default class AbiMethods extends Command {
  static aliases: string[] = ["abi-methods"];

  static description = "lists all methods of abi";

  static examples = ["<%= config.bin %> <%= command.id %> <name>"];

  static args = {
    name: Args.string({
      description: "abi name in storage",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(AbiMethods);

    if (store.has(args.name)) {
      const abi: any[] = JSON.parse(store.get(args.name) as string);
      const abi_methods = abi.filter((el) => el.type === "function");
      abi_methods.forEach((method) => {
        if (method.inputs) {
          const inputParams = method.inputs
            .map((input: MethodInput) => `${input.type} ${input.name}`)
            .join(", ");
          console.log(`- ${method.name}(${inputParams})`);
        } else {
          console.log(`- ${method.name}()`);
        }
      });
    } else {
      console.log(`${chalk.bold.underline(args.name)} does not exist!`);
    }
  }
}
