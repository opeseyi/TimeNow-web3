export interface networkConfigItem {
    priceFeed?: string;
    // vrfCoordinatorV2?: string;
    // subscriptionId?: string;
    // keyHash?: string;
    // callbackGasLimit?: string;
}

export interface networkConfigInfo {
    [key: number]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
    5: {
        priceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    80001: {
        priceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
};

export const developmentChains = ["hardhat", "localhost"];
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
export const DECIMAL = 8;
export const INITIAL_ANSWER = 200000000000;
