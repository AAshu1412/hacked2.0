# ElectroLite

Welcome to the ElectroLite – your gateway to sustainable waste management and renewable energy production! 💡


# Index

- [ElectroLite](#electrolite)
- [Index](#index)
- [Introduction](#introduction)
  - [Techstack](#techstack)
- [How to setup](#how-to-setup)
  - [Clone the repo](#clone-the-repo)
  - [Install dependencies](#install-dependencies)
  - [Create a .env file in "hacked2.0" folder](#create-a-env-file-in-hacked20-folder)
  - [Again Create a .env file in hardhat folder](#again-create-a-env-file-in-hardhat-folder)
  - [Deploying the smart contract (Optional)](#deploying-the-smart-contract-optional)
- [Finally run the webapp](#finally-run-the-webapp)
- [License](#license)



# Introduction

The Waste-to-Energy Platform is a decentralized solution designed to revolutionize how we manage organic waste and harness renewable energy. By connecting households and businesses with local waste-to-energy conversion facilities, our platform incentivizes eco-friendly waste disposal while promoting the generation of clean energy. 

## Techstack
 
    - Vite + ReactJS with Typescript
    - Tailwind CSS
    - Connect Kit
    - Viem
    - Solidity
    - Hardhat
    - Gemini

# How to setup

## Clone the repo

Clone the repo

```bash
git clone git@github.com:AAshu1412/hacked2.0.git
cd "hacked2.0"
```
## Install dependencies

```bash
npm install
```
## Create a .env file in "hacked2.0" folder

Create a .env file in "hacked2.0" folder  
```bash
touch .env
```

Add the following variables:

```bash
VITE_INFURA_KEY="----------Your Infura Key----------"
VITE_WALLETCONNECT_PROJECT_ID="ProjectId"
```

To get VITE_WALLETCONNECT_PROJECT_ID click [here](https://cloud.walletconnect.com/sign-in) 
 - Click on create project
 - Enter the project name (anything)
 - Click on Type - Wallet
 - Copy the Project ID and paste it in a .env file of yours


If you don't have INFURA API KEY then [click here](https://app.infura.io/) and copy your api key



## Again Create a .env file in hardhat folder
 - Create the .env file in hardhat folder
```bash
cd hardhat
touch .env
```
copy this code and paste it in your .env file
``` bash
PRIVATE_KEY="------Enter Your Private Key of metamask wallet--------"
```


## Deploying the smart contract (Optional)

 - Install this dependecy
  ```bash
  cd ..
  npm install @nomicfoundation/hardhat-toolbox
  ```

  - Run this command to deploy the smart contract
  ``` bash
  cd hardhat
  npx hardhat run scripts/deploy.js --network zkEVM
```

 # Finally run the webapp 

```bash
npm run dev
```

The webapp will be running on [localhost](localhost:5173)

To open the same application of another device for testing purposes, make sure that the device is connected to the same network as the device on which the webapp is running. Then visit http://<IP_ADDRESS_OF_THE_DEVICE_RUNNING_THE_WEBAPP>:5173

# License

The projects is licensed under [MIT](https://choosealicense.com/licenses/mit/)
