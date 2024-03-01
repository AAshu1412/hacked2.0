// require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */


require("dotenv").config()  ;
const {INFURA_API_KEY,PRIVATE_KEY}=process.env;


module.exports = {
  solidity: "0.8.20",
  defaultNetwork:"zkEVM",
  // paths: {
  //   artifacts: "../src",
  // },
  networks:{
    hardhat:{},
    zkEVM:{
      url:`https://rpc.public.zkevm-test.net`,
      accounts: [PRIVATE_KEY]  
    },
  }
};