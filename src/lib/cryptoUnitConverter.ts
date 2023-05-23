import { BigNumberish, ethers } from "ethers";
import * as chalk from "chalk";

interface UnitFlags {
  wei: boolean;
  kwei: boolean;
  mwei: boolean;
  gwei: boolean;
  szabo: boolean;
  finney: boolean;
  ether: boolean;
}
export const formatUnits = (amount: BigNumberish, flags: UnitFlags): string => {
  if (flags.wei) {
    return ethers.formatUnits(amount, "wei") + chalk.white(" wei");
  } else if (flags.kwei) {
    return ethers.formatUnits(amount, "kwei") + chalk.white(" kwei");
  } else if (flags.mwei) {
    return ethers.formatUnits(amount, "mwei") + chalk.white(" mwei");
  } else if (flags.gwei) {
    return ethers.formatUnits(amount, "gwei") + chalk.white(" gwei");
  } else if (flags.szabo) {
    return ethers.formatUnits(amount, "szabo") + chalk.white(" szabo");
  } else if (flags.finney) {
    return ethers.formatUnits(amount, "finney") + chalk.white(" finney");
  } else {
    return ethers.formatUnits(amount, "ether") + chalk.white(" ether");
  }
};
