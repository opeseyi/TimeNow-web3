const { ethers, network } = require("hardhat");
const fs = require("fs");

const newFrontendContractFile = "../timeNow/constants/networkMapping.json";
const newFrontendAbiFile = "../timeNow/constants/";

// const frontEndContractFile = "../next-moralis-marketplace/constants/networkMapping.json";
// const frontEndAbiLocation = "../next-moralis-marketplace/constants/";

module.exports = async function () {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Updating frontend");

        await updateContractAddresses();
        await updateAbi();
    }
};

async function updateAbi() {
    // const nftMarketplace = await ethers.getContract("NftMarketPlace");
    const timeNow = await ethers.getContract("TimeNow");

    const chainId = network.config.chainId.toString();

    fs.writeFileSync(
        `${newFrontendAbiFile}timeNow.json`,
        timeNow.interface.format(ethers.utils.FormatTypes.json)
    );

    // const basicNft = await ethers.getContract("BasicNFT");
    // fs.writeFileSync(
    //     `${frontEndAbiLocation}BasicNft.json`,
    //     basicNft.interface.format(ethers.utils.FormatTypes.json)
    // );
}

async function updateContractAddresses() {
    // const nftMarketPlace = await ethers.getContract("NftMarketPlace");
    const timeNow = await ethers.getContract("TimeNow");

    const chainId = network.config.chainId.toString();
    // const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractFile, "utf8"));
    const contractAddresses = JSON.parse(fs.readFileSync(newFrontendContractFile, "utf8"));

    if (chainId in contractAddresses) {
        if (!contractAddresses[chainId]["TimeNow"].includes(timeNow.address)) {
            contractAddresses[chainId]["TimeNow"].push(timeNow.address);
        }
    } else {
        contractAddresses[chainId] = { TimeNow: [timeNow.address] };
    }

    fs.writeFileSync(newFrontendContractFile, JSON.stringify(contractAddresses));
}

module.exports.tags = ["all", "frontend"];
