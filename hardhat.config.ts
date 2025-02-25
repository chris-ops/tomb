import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.ftm.tools/",
      },
    },
  }
};

export default config;
