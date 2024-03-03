import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { createWalletClient, custom, createPublicClient, http } from "viem";
import { polygonZkEvmTestnet } from "wagmi/chains";
import electro from "../smartContractAddress.json";
import elctroabi from "../../hardhat/artifacts/contracts/electro.sol/electro.json";
import Ripples from "react-ripples";

export default function Admin() {
  const { address } = useAccount();

  const [basePrice, setBasePrice] = useState(0);
  const [wet, setWet] = useState(0);
  const [dry, setDry] = useState(0);
  const [surgeMultiplication, setSurgeMultiplication] = useState(3);
  const [weight, setWeight] = useState(0);

  const [morebasePrice, setmoreBasePrice] = useState(0);
  const [morewet, setmoreWet] = useState(0);
  const [moredry, setmoreDry] = useState(0);
  const [moresurgeMultiplication, setmoreSurgeMultiplication] = useState(1);
  const [moreweight, setmoreWeight] = useState(0);

  const calculatePrice = (): void => {
    const totalCost = basePrice + wet + dry;
    const totalPrice = totalCost * surgeMultiplication;
    setValue2(0);
    setValue(totalPrice);
    // return totalPrice;
  };

  const calculatemorePrice = (): void => {
    const moretotalCost = morebasePrice + morewet + moredry;
    const moretotalPrice = moretotalCost * moresurgeMultiplication;
    setValue(0);
    setValue2(moretotalPrice);
    // return moretotalPrice;
  };

  const [user_addrs, setUser_addrs] = useState("");
  const [user_waste, setUser_waste] = useState(0);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleInput = (event) => {
    const name = event.target.name;
    // console.log(event.target.value);
    const value = event.target.value;
    console.log(name, value);
    if (name == "addrs") setUser_addrs(value);
    if (name == "waste") setUser_waste(value);
  };

  const publicClient = createPublicClient({
    chain: polygonZkEvmTestnet,
    transport: http(),
  });

  const walletClient = createWalletClient({
    chain: polygonZkEvmTestnet,
    transport: custom((window as any).ethereum),
  });

  async function sendReward(val): Promise<any> {
    await walletClient.writeContract({
      address: electro.smartContractAddress as `0x${string}`,
      abi: elctroabi.abi,
      functionName: "sendReward",
      args: [user_addrs, val, user_waste],
      account: address as `0x${string}`,
      chain: polygonZkEvmTestnet,
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-10 mt-24">
        <h1 className="text-4xl font-bold px-[20px] ml-20">
          Waste Management Surge Price Calculator
        </h1>
        <div className="flex flex-row px-24 gap-24 justify-around">
          <div className="w-1/2 h-[340px] rounded-md shadow-lg h-[300px] px-[10px] py-[10px] items-center  border border-4 border-black rounded-2xl">
            <h2 className="text-3xl font-semibold underline leading-wide mb-[10px]">
              Less Community Engagement
            </h2>
            <form className="w-full px-[20px] py-[30px] flex flex-col gap-4">
              <div className="flex gap-7">
                <input
                  value={basePrice}
                  onChange={(e) => setBasePrice(parseFloat(e.target.value))}
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold ">
                  Enter base price
                </label>
              </div>
              <div className="flex gap-7">
                <input
                  value={wet}
                  onChange={(e) => setWet(parseFloat(e.target.value))}
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold">
                  Enter wet waste cost per kg
                </label>
              </div>
              <div className="flex gap-7">
                <input
                  value={dry}
                  onChange={(e) => setDry(parseFloat(e.target.value))}
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold">
                  Enter dry waste cost per kg
                </label>
              </div>
              <div className="flex gap-7">
                <input
                  value={surgeMultiplication}
                  onChange={(e) =>
                    setSurgeMultiplication(parseFloat(e.target.value))
                  }
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold">
                  Enter surge multiplicator
                </label>
              </div>
            </form>
            <div className="flex flex-row gap-4">
              <Ripples
                color="black"
                during={1200}
                placeholder={"Random Anything"}
              >
                <button
                  onClick={calculatePrice}
                  className="border-2 border-black px-8 rounded-md"
                >
                  Calculate
                </button>
              </Ripples>

              <p className="text-xl text-black font-semibold">
                Total Price: {value} ElectroLite
              </p>
            </div>
          </div>
          <div className="w-1/2 h-[340px]  rounded-md shadow-lg h-[300px] px-[10px] py-[10px] items-center  border border-4 border-black rounded-2xl">
            <h2 className="text-3xl font-semibold underline leading-wide mb-[10px]">
              More Community Engagement
            </h2>
            <form className="w-full px-[20px] py-[30px] flex flex-col gap-4">
              <div className="flex gap-7">
                <input
                  value={morebasePrice}
                  onChange={(e) => setmoreBasePrice(parseFloat(e.target.value))}
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold">
                  Enter base price
                </label>
              </div>
              <div className="flex gap-7">
                <input
                  value={morewet}
                  onChange={(e) => setmoreWet(parseFloat(e.target.value))}
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold">
                  Enter wet waste cost per kg
                </label>
              </div>
              <div className="flex gap-7">
                <input
                  value={moredry}
                  onChange={(e) => setmoreDry(parseFloat(e.target.value))}
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold">
                  Enter dry waste cost per kg
                </label>
              </div>
              <div className="flex gap-7">
                <input
                  value={moresurgeMultiplication}
                  onChange={(e) =>
                    setmoreSurgeMultiplication(parseFloat(e.target.value))
                  }
                  type="number"
                  className="rounded-md border-2 border-black "
                />
                <label className="text-xl text-black font-semibold">
                  Enter surge multiplicator
                </label>
              </div>
            </form>
            <div className="flex flex-row gap-4">
              <Ripples
                color="black"
                during={1200}
                placeholder={"Random Anything"}
              >
                <button
                  onClick={calculatemorePrice}
                  className="border-2 border-black px-8 rounded-md"
                >
                  Calculate
                </button>
              </Ripples>
              <p className="text-xl text-black font-semibold">
                Total Price: {value2} electroLite
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20  gap-10 items-center  ">
        <div className="flex flex-col gap-4 items-center ">
          <h1 className="text-xl font-bold text-black">
            Enter User Address and Waste (Kg)
          </h1>
          <div className="flex flex-row gap-10">
            <input
              className="w-[900px] h-12 rounded-md border-2 border-black "
              placeholder="User Address"
              type="text"
              autoComplete="off"
              value={user_addrs}
              onChange={handleInput}
              name="addrs"
              id="addrs"
            ></input>
            <input
              className="w-[200px] h-12 rounded-md border-2 border-black "
              placeholder="Waste"
              type="number"
              autoComplete="off"
              value={user_waste}
              onChange={handleInput}
              name="waste"
              id="waste"
            ></input>
          </div>
        </div>
        <Ripples color="black" during={1200} placeholder={"Random Anything"}>
          <button
            className="w-36 border-2 border-black px-8 py-3 rounded-md font-bold text-lg"
            onClick={
              value == 0 ? () => sendReward(value2) : () => sendReward(value)
            }
          >
            Send
          </button>
        </Ripples>
      </div>
    </div>
  );
}
