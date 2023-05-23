import { expect, test } from "@oclif/test";
import { getProviderWithName } from "../utils/provider";

const txHash =
  "0x9c773fcf1228e440f0e60ce29db2c5ce33c74c6fc3e8983760c8fe667b428d2a";
describe("tx", () => {
  test
    .stdout()
    .command(["tx", txHash, "--mainnet"])
    .it(
      "retrieves the transaction object of specified transaction hash",
      async (ctx) => {
        const provider = getProviderWithName("mainnet");
        const transaction = await provider.getTransaction(txHash);
        expect(ctx.stdout).to.contain(transaction);
      }
    );
});
