import { Flags } from "@oclif/core";

const networks = ["mainnet", "goerli", "sepolia"];

export const etherscanNetworkFlags = {
  mainnet: Flags.boolean({
    description: "etherscan supported network",
    exclusive: networks.filter((network) => network !== "mainnet"),
  }),
  goerli: Flags.boolean({
    description: "etherscan supported network",
    exclusive: networks.filter((network) => network !== "goerli"),
  }),
  sepolia: Flags.boolean({
    description: "etherscan supported network",
    exclusive: networks.filter((network) => network !== "sepolia"),
  }),
};

interface NetworkFlags {
  mainnet: boolean;
  sepolia: boolean;
  goerli: boolean;
}

export const getEtherscanDomain = (flags: NetworkFlags) => {
  let domain: string;

  if (flags.goerli) {
    domain = "https://api-goerli.etherscan.io";
  } else if (flags.sepolia) {
    domain = "https://api-sepolia.etherscan.io";
  } else {
    domain = "https://api.etherscan.io";
  }

  return domain;
};
