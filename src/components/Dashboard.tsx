import React from "react";
import { useState } from "react";
import water from "../assets/icons8-water-64.svg";
import electricity from "../assets/icons8-electricity-50.svg";

export default function Dashboard() {
  const [electricity1, setElectricity] = useState(0);
  const [water1, setWater] = useState(0);

  const handleInput = (event) => {
    const name = event.target.name;
    // console.log(event.target.value);
    const value = event.target.value;
    console.log(name, value);
    if (name == "elec") setElectricity(value);
    if (name == "wat") setWater(value);
  };

  return (
    <div className=" flex flex-row justify-between">
      <div className="ml-36 mt-28 ">
        <div className="flex flex-col gap-10  p-10 border border-4 border-black rounded-2xl">
          <div>
            <div className="flex flex-row gap-44 items-center">
              <div className=" w-64 flex flex-row items-center gap-4 ">
                <img
                  src={electricity}
                  className="w-16 p-2 bg-slate-200 rounded-md"
                ></img>
                <div>
                  <h1 className="text-2xl">Electricity Bill</h1>
                  <h1 className="text-xl">100</h1>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <input
                  placeholder="Send Coin"
                  type="number"
                  autoComplete="off"
                  value={electricity1}
                  onChange={handleInput}
                  name="elec"
                  id="elec"
                  className="h-10 rounded-md border-2 border-black "
                ></input>
                <button className="border-2 border-black px-8 rounded-md">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-44 items-center">
              <div className="w-64 flex flex-row items-center gap-4 ">
                <img
                  src={water}
                  className="w-16 p-2 bg-slate-200 rounded-md"
                ></img>
                <div>
                  <h1 className="text-2xl">Water Bill</h1>
                  <h1 className="text-xl">100</h1>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <input
                  placeholder="Send Coin"
                  type="number"
                  autoComplete="off"
                  value={water1}
                  onChange={handleInput}
                  name="wat"
                  id="wat"
                  className="h-10 rounded-md border-2 border-black "
                ></input>
                <button className="border-2 border-black px-8 rounded-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>dddddddddddddddddddddddddddddddddddddddddddddddddd</div>
      </div>
      <div className="bg-black border-0 rounded-3xl h-[76vh] mr-7">
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mt-28 ml-10 grid gap-6  rounded-2xl	 ">
            <h1 className="text-3xl font-semibold	">Total ElectroLite</h1>
            <h1 className="text-5xl">100</h1>
          </div>
          <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mt-28  grid gap-6 mr-10 rounded-2xl	">
            <h1 className="text-3xl font-semibold	"> Total Waste</h1>
            <h1 className="text-5xl">100</h1>
          </div>
          <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mb-28 ml-10  grid gap-6 rounded-2xl	">
            <h1 className="text-3xl font-semibold	"> Monthly Energy</h1>
            <h1 className="text-5xl">100</h1>
          </div>
          <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mb-28 mr-10  grid gap-6 rounded-2xl	">
            <h1 className="text-3xl font-semibold	"> Total Redeem Coin</h1>
            <h1 className="text-5xl">100</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
