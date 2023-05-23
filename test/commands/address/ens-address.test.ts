import { expect, test } from "@oclif/test";

const ens = "valentineorga.eth";
describe("ens-address", () => {
  test
    .stdout()
    .command(["ens-address", ens, "--mainnet"])
    .it("retrieves address of ens", (ctx) => {
      expect(ctx.stdout).to.contain(
        "0xF51CD0d607c82db2B70B678554c52C266a9D49B6"
      );
    });

  test
    .stdout()
    .command(["ens-address", "somerubbishname.nonsense", "--mainnet"])
    .it("indicates if ens is not registered", (ctx) => {
      expect(ctx.stdout).to.contain("No address");
    });
});
