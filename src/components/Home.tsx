import React from "react";
import home_img from "../assets/image.png"
import { useAccount } from "wagmi";


export default function Home() {
    const { address } = useAccount();

  return (
    <div className="bg-blue-200 flex flex-row justify-center mt-20 items-center ">
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-9">
            <h1 className="w-[750px] text-5xl font-bold">Make a difference every day by recycling waste and powering your community.</h1>    
        <h1 className="w-[700px] text-xl">Join the movement towards sustainable living with our decentralized waste-to-energy platform – where every action counts towards a greener future.</h1>
     
            </div>
            <div className="flex flex-col gap-2">
            <h1 className="text-lg">{address ?? "Loading address"}</h1>
            <h1 className="text-lg">{address ?? "Loading address"}</h1>

            <h1 className="text-lg">{address ?? "Loading address"}</h1>

            </div>
           </div>
        <div>
<img src={home_img}></img>
        </div>
    </div>
  );
}
