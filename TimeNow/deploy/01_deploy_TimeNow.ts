import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentChains, networkConfig } from "../helper-hardhat.config";

const deployTimeNow: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts, network } = hre;
    const { log, deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const chainId: any = network.config.chainId;
    let priceFeed: any;

    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        priceFeed = ethUsdAggregator.address;
    } else {
        priceFeed = networkConfig[chainId].priceFeed;
    }

    log("Deploying...");
    const timeNow = await deploy("TimeNow", {
        from: deployer,
        args: [priceFeed],
        log: true,
        waitConfirmations: 1,
    });
    log("Deployed");
};

export default deployTimeNow;
deployTimeNow.tags = ["all", "TimeNow"];
