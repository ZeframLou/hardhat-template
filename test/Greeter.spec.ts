import { expect } from "chai";
import { ethers, deployments, getNamedAccounts } from "hardhat";

import { Greeter } from "../typechain";

describe("Greeter", function () {
  let deployer: string;

  let greeter: Greeter;

  beforeEach(async function () {
    await deployments.fixture();
    deployer = (await getNamedAccounts()).deployer;
    greeter = await (ethers as any).getContract("Greeter", deployer);
  });

  it("should return the new greeting once it's changed", async function () {
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
