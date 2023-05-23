import { expect, test } from "@oclif/test";

const address = "0xF51CD0d607c82db2B70B678554c52C266a9D49B6";
describe("address-ens", () => {
  test
    .stdout()
    .command(["address-ens", address, "--mainnet"])
    .it("retrieves ens of address if registered", (ctx) => {
      expect(ctx.stdout).to.contain("valentineorga.eth");
    });

  test
    .stdout()
    .command([
      "address-ens",
      "0x7a82bbfD10E3Ce5817dEcC0ee870e17D6853D901",
      "--mainnet",
    ])
    .it("indicates if address is unregistered for ENS", (ctx) => {
      expect(ctx.stdout).to.contain("No ENS");
    });
});
