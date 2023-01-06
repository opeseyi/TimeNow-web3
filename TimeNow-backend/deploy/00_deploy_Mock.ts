import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DECIMAL, developmentChains, INITIAL_ANSWER } from "../helper-hardhat.config";

const deployMock: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts, network } = hre;
    const { log, deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    log("Deploying...");
    if (developmentChains.includes(network.name)) {
        log("Local network detected, Deploying nodes...");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMAL, INITIAL_ANSWER],
        });
        log("Mocks Deployed");
        log("-----------------------------------");
    }
};

export default deployMock;
deployMock.tags = ["all", "Mock"];
