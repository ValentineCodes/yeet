import { expect, test } from "@oclif/test";
import { getProviderWithName } from "../../utils/provider";

describe("block", () => {
  test
    .stdout()
    .command(["block", "--mainnet"])
    .it("retrieves latest block of specified network(mainnet)", async (ctx) => {
      const provider = getProviderWithName("mainnet");
      const blockNumber = await provider.getBlockNumber();
      const block = await provider.getBlock(blockNumber);

      expect(ctx.stdout).to.contain(block);
    });

  test
    .stdout()
    .command(["block", "0", "--mainnet"])
    .it(
      "retrieves block object of block number 0 of specified network(mainnet)",
      async (ctx) => {
        const provider = getProviderWithName("mainnet");
        const block = await provider.getBlock(0);

        expect(ctx.stdout).to.contain(block);
      }
    );
});
