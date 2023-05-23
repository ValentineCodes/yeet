import { expect, test } from "@oclif/test";
import { getProviderWithName } from "../../utils/provider";

describe("block-number", () => {
  test
    .stdout()
    .command(["block-number", "--mainnet"])
    .it(
      "retrieves the latest block number of specified network(mainnet)",
      async (ctx) => {
        const provider = getProviderWithName("mainnet");
        const blockNumber = await provider.getBlockNumber();

        expect(ctx.stdout).to.contain(blockNumber);
      }
    );
});
