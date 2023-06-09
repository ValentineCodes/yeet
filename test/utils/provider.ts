import { ethers } from "ethers";

export interface Providers {
  localhost: string;
  mainnet: string;
  sepolia: string;
  goerli: string;
  arbitrum: string;
  arbitrumGoerli: string;
  optimism: string;
  optimismGoerli: string;
  polygon: string;
  polygonMumbai: string;
}

export const ALCHEMY_KEY = "3r2DCLym4DBk_vrcyHZxw5LsnrOyoxWG";

const providers = {
  localhost: "http://127.0.0.1:8545/",
  mainnet: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  sepolia: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  goerli: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  arbitrum: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  arbitrumGoerli: `https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  optimism: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  optimismGoerli: `https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  polygon: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  polygonMumbai: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
};

export const getProviderWithName = (name: keyof typeof providers) => {
  return new ethers.JsonRpcProvider(providers[name]);
};
