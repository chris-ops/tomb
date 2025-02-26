import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
  
    // // Deploy Oracle
    // const period = 300; // 5 minutes for testing
    // const startTime = Math.floor(Date.now() / 1000);
    // const Oracle = await ethers.getContractFactory("Oracle");
    // const oracle = await Oracle.deploy(pairAddress, period, startTime);
    // await oracle.deployed();
  
    // Deploy TOMB (assuming it takes oracle and pair)
    const Tomb = 
    console.log("Tomb address:", Tomb.address);
  }
  
  main().catch(console.error);