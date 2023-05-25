import { Args, Command } from "@oclif/core";
import { ethers } from "ethers";
import * as chalk from "chalk";

import { providerNetworkFlags } from "../lib/flags/networkFlags";
import { getProvider } from "../lib/provider";

export default class Transfer extends Command {
  static description = "transfer funds";

  static examples = [
    "<%= config.bin %> <%= command.id %> valentineorga.eth 0.5 0x182466b65247ebac8c2a0483aaede25af0d5a328a718674c6b6830f8b21d6f6e --mainnet",
  ];

  static flags = {
    ...providerNetworkFlags,
  };

  static args = {
    to: Args.string({
      description: "address of receiver",
      required: true,
    }),
    amount: Args.string({ description: "amount in eth", required: true }),
    private_key: Args.string({
      description: "private key of transaction signer",
      required: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Transfer);

    if (!ethers.isAddress(args.to)) {
      throw new Error("Invalid receiver address");
    }
    if (isNaN(Number(args.amount)) || Number(args.amount) <= 0) {
      throw new Error("Invalid amount");
    }

    const provider = getProvider(flags);
    const wallet = new ethers.Wallet(args.private_key).connect(provider);

    try {
      await wallet.sendTransaction({
        to: args.to,
        value: ethers.parseEther(args.amount),
      });

      console.log(
        `Successfully transferred ${chalk.green(
          args.amount
        )} ETH to ${chalk.underline(args.to)}✅`
      );
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
