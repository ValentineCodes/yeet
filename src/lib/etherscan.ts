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
