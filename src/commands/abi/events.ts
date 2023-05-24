import { Args, Command } from "@oclif/core";
import Conf from "conf";
import * as chalk from "chalk";

interface EventInput {
  name: string;
  type: string;
}

const store = new Conf();

export default class AbiEvents extends Command {
  static aliases: string[] = ["abi-events"];

  static description = "lists all events of abi";

  static examples = ["<%= config.bin %> <%= command.id %> <name>"];

  static args = {
    name: Args.string({
      description: "abi name in storage",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(AbiEvents);

    if (store.has(args.name)) {
      const abi: any[] = JSON.parse(store.get(args.name) as string);
      const events = abi.filter((el) => el.type === "event");
      events.forEach((method) => {
        if (method.inputs) {
          const inputParams = method.inputs
            .map((input: EventInput) => `${input.type} ${input.name}`)
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
