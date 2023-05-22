import { Args, Command, Flags } from "@oclif/core";
import { ethers } from "ethers";
import * as chalk from "chalk";

export default class GenerateAccount extends Command {
  static description = "generates a new random account";

  static examples = ["<%= config.bin %> <%= command.id %> generateAccount"];

  public async run(): Promise<void> {
    const wallet = ethers.Wallet.createRandom();
    if (wallet.mnemonic) {
      console.log(
        `MNEMONIC(${chalk.red.underline.bold(
          "DO NOT REVEAL THIS TO ANYONE!!!"
        )}):\n`,
        wallet.mnemonic.phrase
      );
    }

    console.log(
      `\nPRIVATE KEY(${chalk.red.underline.bold(
        "DO NOT REVEAL THIS TO ANYONE!!!"
      )}):\n`,
      wallet.privateKey
    );
    console.log("\nADDRESS:\n", wallet.address);
  }
}
