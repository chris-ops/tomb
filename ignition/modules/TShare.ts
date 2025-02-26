// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TombShareModule = buildModule("TombShareModule", (m) => {
  const tombShare = m.contract("TShare", ['1', `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`, `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`]);

  return { tombShare };
});

export default TombShareModule;
