import { Args, Command, Flags } from "@oclif/core";
import { ethers } from "ethers";
import * as chalk from "chalk";
import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";

interface NewWallet {
  mnemonic?: string;
  privateKey: string;
  address: string;
}
export default class GenerateAccount extends Command {
  static description = "generates a new random account";

  static examples = ["<%= config.bin %> <%= command.id %> generateAccount"];

  static flags = {
    "no-export": Flags.boolean({
      description:
        "disables export for mnemonic and private key to 'new-wallet.json' file in current directory",
    }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(GenerateAccount);

    const wallet = ethers.Wallet.createRandom();

    if (flags["no-export"]) {
      if (wallet.mnemonic) {
        console.log(
          `MNEMONIC(${chalk.yellow.underline.bold(
            "DO NOT REVEAL THIS TO ANYONE!!!"
          )}):\n`,
          wallet.mnemonic.phrase
        );
      }

      console.log(
        `\nPRIVATE KEY(${chalk.yellow.underline.bold(
          "DO NOT REVEAL THIS TO ANYONE!!!"
        )}):\n`,
        wallet.privateKey
      );

      console.log("\nADDRESS:\n", wallet.address);
    } else {
      let newWallet: NewWallet = {
        address: wallet.address,
        privateKey: wallet.privateKey,
      };

      if (wallet.mnemonic) {
        newWallet.mnemonic = wallet.mnemonic.phrase;
      }

      const id = uuidv4();

      fs.writeFile(
        `new-wallet-${id}.json`,
        JSON.stringify(newWallet),
        (error) => {
          if (error) {
            throw new Error(JSON.stringify(error));
          } else {
            console.log("Wallet created successfully✅");
            console.log(
              `Written to ${chalk.green.underline.bold(
                `./new-wallet-${id}.json`
              )}`
            );
            console.log(
              chalk.yellow.bold(
                "DO NOT REVEAL YOUR MNEMONIC AND PRIVATE KEY TO ANYONE... PROTECT YOUR FUNDS!!!"
              )
            );
          }
        }
      );
    }
  }
}
