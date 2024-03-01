const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const electroContractFactory = await hre.ethers.getContractFactory("electro");
  const electroContract = await electroContractFactory.deploy();


  try {
    fs.writeFileSync(
      "../src/smartContractAddress.json",
      JSON.stringify({ smartContractAddress: electroContract.target })
    );
  } catch (error) {
    console.error(error);

    throw error;
  }

  console.log(
    `Contract :  timestamp ${unlockTime} deployed to ${electroContract.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});