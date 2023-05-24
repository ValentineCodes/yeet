import { expect, test } from "@oclif/test";

const ens = "valentineorga.eth";
const address = "0xF51CD0d607c82db2B70B678554c52C266a9D49B6";
describe("account-balance", () => {
  test
    .stdout()
    .command(["account-balance", ens, "--mainnet"])
    .it("retrieves balance of ens in ether", (ctx) => {
      expect(ctx.stdout).to.contain("0.001204329609760741 ether");
    });

  test
    .stdout()
    .command(["account-balance", address, "--mainnet"])
    .it("retrieves balance of address in ether", (ctx) => {
      expect(ctx.stdout).to.contain("0.001204329609760741 ether");
    });

  test
    .stdout()
    .command(["account-balance", ens, "--mainnet", "--wei"])
    .it("retrieves balance of user in wei", (ctx) => {
      expect(ctx.stdout).to.contain("1204329609760741 wei");
    });
});
