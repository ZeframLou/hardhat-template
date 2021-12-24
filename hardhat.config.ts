import * as dotenv from "dotenv";
dotenv.config();

import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-solhint";
import "hardhat-spdx-license-identifier";
import "hardhat-docgen";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";
import "@typechain/hardhat";
import "hardhat-deploy-ethers";

import { HardhatUserConfig } from "hardhat/config";

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 1,
    },
  },
  paths: {
    sources: "./contracts",
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC_URL ?? "",
      chainId: 1,
      accounts,
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL ?? "",
      chainId: 4,
      accounts,
    },
  },
  spdxLicenseIdentifier: {
    runOnCompile: true,
  },
  docgen: {
    except: [],
    clear: true,
    runOnCompile: false,
  },
  mocha: {
    timeout: 60000,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  typechain: {
    target: "ethers-v5",
  },
};

export default config;
