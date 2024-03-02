import React from "react";
import home_img from "../assets/image.png";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { createWalletClient, custom, createPublicClient, http } from "viem";
import { polygonZkEvmTestnet } from "wagmi/chains";
import electro from "../smartContractAddress.json";
import elctroabi from "../../hardhat/artifacts/contracts/electro.sol/electro.json";

export default function Home() {
  const { address } = useAccount();
  const [balance, setBalance] = useState(0);
  const [type, setType] = useState("");

  const publicClient = createPublicClient({
    chain: polygonZkEvmTestnet,
    transport: http(),
  });

  useEffect(() => {
    (async () => {
      const data = await publicClient.readContract({
        address: electro.smartContractAddress as `0x${string}`,
        abi: elctroabi.abi,
        functionName: "balanceOf",
        args: [address],
        account: address as `0x${string}`,
      });
      setBalance(Number(data));
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      const data1 = await publicClient.readContract({
        address: electro.smartContractAddress as `0x${string}`,
        abi: elctroabi.abi,
        functionName: "types",
        args: [address],
        account: address as `0x${string}`,
      });
      setType(data1 as string);
    })();
  }, [address]);

  return (
    <div className=" flex flex-row justify-center mt-20 items-center ">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-9">
          <h1 className="w-[750px] text-5xl font-bold">
            Make a difference every day by recycling waste and powering your
            community.
          </h1>
          <h1 className="w-[700px] text-xl">
            Join the movement towards sustainable living with our decentralized
            waste-to-energy platform – where every action counts towards a
            greener future.
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium">{address ?? "Loading address"}</h1>
          <h1 className="text-2xl font-medium">Balance : {balance}</h1>

          <h1 className="text-2xl font-medium">Type : {type}</h1>
        </div>
      </div>
      <div>
        <img src={home_img}></img>
      </div>
    </div>
  );
}
