import { Flags } from "@oclif/core";
import { providerNetworks, etherscanNetworks } from "../../utils/constants";

export const providerNetworkFlags = {
  rpc_url: Flags.string({
    description: "provider network rpc url",
  }),
  mainnet: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "mainnet"),
    ],
  }),
  sepolia: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "sepolia"),
    ],
  }),
  goerli: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "goerli"),
    ],
  }),
  arbitrum: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "arbitrum"),
    ],
  }),
  arbitrumGoerli: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "arbitrumGoerli"),
    ],
  }),
  optimism: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "optimism"),
    ],
  }),
  optimismGoerli: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "optimismGoerli"),
    ],
  }),
  polygon: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "polygon"),
    ],
  }),
  polygonMumbai: Flags.boolean({
    description: "provider network",
    exclusive: [
      "rpc_url",
      ...providerNetworks.filter((network) => network !== "polygonMumbai"),
    ],
  }),
};

export const etherscanNetworkFlags = {
  mainnet: Flags.boolean({
    description: "etherscan supported network",
    exclusive: etherscanNetworks.filter((network) => network !== "mainnet"),
  }),
  goerli: Flags.boolean({
    description: "etherscan supported network",
    exclusive: etherscanNetworks.filter((network) => network !== "goerli"),
  }),
  sepolia: Flags.boolean({
    description: "etherscan supported network",
    exclusive: etherscanNetworks.filter((network) => network !== "sepolia"),
  }),
};
