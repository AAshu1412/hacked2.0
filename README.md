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
  - [Create a .env file](#create-a-env-file)
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
    - Foundry

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
## Create a .env file

Create a .env file in webapp folder and add the following variables:

```bash
VITE_INFURA_KEY="----------Your Infura Key----------"
VITE_WALLETCONNECT_PROJECT_ID="ProjectId"
VITE_CONTRACT="0x000E65B85A0f89f1006bC5202ecBE70D249698Ad"
```

To get VITE_WALLETCONNECT_PROJECT_ID click [here](https://cloud.walletconnect.com/sign-in) 
 - Click on create project
 - Enter the project name (anything)
 - Click on Type - Wallet
 - Copy the Project ID and paste it in a .env file of yours

 # Finally run the webapp

```bash
npm run dev
```

The webapp will be running on [localhost](localhost:5173)

To open the same application of another device for testing purposes, make sure that the device is connected to the same network as the device on which the webapp is running. Then visit http://<IP_ADDRESS_OF_THE_DEVICE_RUNNING_THE_WEBAPP>:5173

# License

The projects is licensed under [MIT](https://choosealicense.com/licenses/mit/)
