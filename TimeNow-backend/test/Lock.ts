import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { developmentChains } from "../helper-hardhat.config";
import { deployments, ethers, getNamedAccounts, network } from "hardhat";
import { MockV3Aggregator, TimeNow } from "../typechain-types";

const getETher: any = (amount: string) => {
    return ethers.utils.parseUnits(amount, "wei").toString();
};

const priceConversion: any = async (
    amount: number,
    mockContract: MockV3Aggregator
): Promise<string> => {
    const ETH_PRICE = await mockContract.callStatic.latestRoundData();
    const ethPriceAdjusted = ETH_PRICE[1].toNumber() * 1e10;
    const usd = amount * 1e18;
    const rate = (usd * 1e18) / ethPriceAdjusted;
    return `${rate}`;
};

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("TimeNow Test", () => {
          let accounts: SignerWithAddress[];
          let timeNow: TimeNow;
          let mockContract: MockV3Aggregator;
          beforeEach(async () => {
              accounts = await ethers.getSigners();
              await deployments.fixture(["all"]);
              timeNow = await ethers.getContract("TimeNow", accounts[0].address);
              mockContract = await ethers.getContract("MockV3Aggregator", accounts[0].address);
          });
          describe("The Constructor", () => {
              it("Initialize the State variable", async () => {
                  assert.equal(mockContract.address, await timeNow.getPriceFeed());
              });
          });
          describe("The pay() function", () => {
              it("Revert if amount is zero", async () => {
                  await expect(timeNow.pay({ value: getETher("0") })).to.be.reverted;
              });
              it("pay", async () => {
                  const isSuccessful = await timeNow.callStatic.pay({ value: getETher("1") });
                  assert.equal(isSuccessful, true);
              });
              it("Checks If payer is added to Mapping", async () => {
                  await timeNow.pay({ value: getETher("1") });
                  const amtPayed = await timeNow.getPayers();
                  assert.equal(getETher("1"), amtPayed.toNumber());
              });
              it("Emit an event", async () => {
                  await expect(timeNow.pay({ value: getETher("1") })).to.emit(
                      timeNow,
                      "PaymentSuccessFul"
                  );
              });
          });
          describe("The _getPriceRate", () => {
              it("", async () => {
                  const x = await timeNow._getPriceRate(50); // Bad Variable Naming
                  const y = await priceConversion(50, mockContract); // Bad Variable Naming

                  assert.equal(x.toString(), y);
              });
          });
          describe("The getter function", () => {
              it("Returns the amount in a contract", async () => {
                  const contractAmt = await timeNow.getPriceOfContract();

                  const x = await timeNow.pay({ value: getETher("1") });
                  const contractAmt2 = await timeNow.getPriceOfContract();

                  expect(contractAmt.toNumber() < contractAmt2.toNumber());
              });
              it("Returns pricesFeed address", async () => {
                  const priceFeedAddrFromContract = await timeNow.getPriceFeed();
                  await expect(mockContract.address).to.equal(priceFeedAddrFromContract);
              });
          });
      });
