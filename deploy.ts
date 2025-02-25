import { ethers } from "hardhat";
async function main() {
    const [deployer] = await ethers.getSigners();
  
    // Deploy Oracle
    const period = 300; // 5 minutes for testing
    const startTime = Math.floor(Date.now() / 1000);
    const Oracle = await ethers.getContractFactory("Oracle");
    const oracle = await Oracle.deploy(pairAddress, period, startTime);
    await oracle.deployed();
  
    // Deploy TOMB (assuming it takes oracle and pair)
    const Tomb = await ethers.getContractFactory("Tomb");
    const realTomb = await Tomb.deploy(`111`, `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`); // Adjust constructor args
    await realTomb.deployed();
  
    // // Deploy Cemetery
    // const Cemetery = await ethers.getContractFactory("Cemetery");
    // const cemetery = await Cemetery.deploy(pairAddress, tshare.address);
    // await cemetery.deployed();
  
    // // Deploy Masonry
    // const Masonry = await ethers.getContractFactory("Masonry");
    // const masonry = await Masonry.deploy(tshare.address, realTomb.address, oracle.address);
    // await masonry.deployed();
  
    // console.log("Oracle:", oracle.address, "Tomb:", realTomb.address, "Cemetery:", cemetery.address, "Masonry:", masonry.address);
  }
  
  main().catch(console.error);