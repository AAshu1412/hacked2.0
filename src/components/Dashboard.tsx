import React from "react";
import water from "../assets/icons8-water-64.svg";
import electricity from "../assets/icons8-electricity-50.svg";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { createWalletClient, custom, createPublicClient, http } from "viem";
import { polygonZkEvmTestnet } from "wagmi/chains";
import electro from "../smartContractAddress.json";
import elctroabi from "../../hardhat/artifacts/contracts/electro.sol/electro.json";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBvSswhwR0HD6LfgHLsjGHxtjw7Rgq5wro");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default function Dashboard() {
  const [gemini_data, setGemini_data] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [fetch_gemini_data, setFetch_gemini_data] = useState("");

  const handleInput3 = (event) => {
    const name = event.target.name;
    // console.log(event.target.value);
    const value = event.target.value;
    console.log(name, value);
    if (name == "gem") setGemini_data(value);
  };

  async function fetchDataFromGemini() {
    try {
      setFetch_gemini_data("");
      const prompt = gemini_data;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      setLoading(true);
      setFetch_gemini_data(text);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////
  const { address } = useAccount();

  const [electricity1, setElectricity] = useState(0);
  const [water1, setWater] = useState(0);
  const [send_func, setSend_func] = useState({
    address: "",
    coin: 0,
  });

  const handleInput = (event) => {
    const name = event.target.name;
    // console.log(event.target.value);
    const value = event.target.value;
    console.log(name, value);
    if (name == "elec") setElectricity(value);
    if (name == "wat") setWater(value);
  };

  const handleInput2 = (event) => {
    const name = event.target.name;
    // console.log(event.target.value);
    const value = event.target.value;
    console.log(name, value);

    setSend_func({ ...send_func, [name]: value });
  };

  //////////////////////////////////////////////////////////////////////////////

  const publicClient = createPublicClient({
    chain: polygonZkEvmTestnet,
    transport: http(),
  });

  const walletClient = createWalletClient({
    chain: polygonZkEvmTestnet,
    transport: custom((window as any).ethereum),
  });

  ///////////////////////////////////////////////////////////////////////////////

  const [people_total_amount, setPeople_total_amount] = useState(0);
  const [people_deducted_amount, setPeople_deducted_amount] = useState(0);
  const [people_waste, setPeople_waste] = useState(0);

  const [people_elec_bill, setPeople_elec_bill] = useState(0);
  const [people_water_bill, setPeople_water_bill] = useState(0);

  //////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    (async () => {
      const data = await publicClient.readContract({
        address: electro.smartContractAddress as `0x${string}`,
        abi: elctroabi.abi,
        functionName: "people_total_amount",
        args: [address],
        account: address as `0x${string}`,
      });
      const dataaa = JSON.parse(
        JSON.stringify(data, (key, value) => {
          return typeof value === "bigint" ? value.toString() : value;
        })
      );
      setPeople_total_amount(dataaa);
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      const data = await publicClient.readContract({
        address: electro.smartContractAddress as `0x${string}`,
        abi: elctroabi.abi,
        functionName: "people_deducted_amount",
        args: [address],
        account: address as `0x${string}`,
      });
      const dataaa = JSON.parse(
        JSON.stringify(data, (key, value) => {
          return typeof value === "bigint" ? value.toString() : value;
        })
      );
      setPeople_deducted_amount(dataaa);
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      const data = await publicClient.readContract({
        address: electro.smartContractAddress as `0x${string}`,
        abi: elctroabi.abi,
        functionName: "people_waste",
        args: [address],
        account: address as `0x${string}`,
      });
      const dataaa = JSON.parse(
        JSON.stringify(data, (key, value) => {
          return typeof value === "bigint" ? value.toString() : value;
        })
      );
      setPeople_waste(dataaa);
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      const data = await publicClient.readContract({
        address: electro.smartContractAddress as `0x${string}`,
        abi: elctroabi.abi,
        functionName: "getElecBill",
        args: [address],
        account: address as `0x${string}`,
      });
      const dataaa = JSON.parse(
        JSON.stringify(data, (key, value) => {
          return typeof value === "bigint" ? value.toString() : value;
        })
      );
      setPeople_elec_bill(dataaa);
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      const data = await publicClient.readContract({
        address: electro.smartContractAddress as `0x${string}`,
        abi: elctroabi.abi,
        functionName: "getWaterBill",
        args: [address],
        account: address as `0x${string}`,
      });
      const dataaa = JSON.parse(
        JSON.stringify(data, (key, value) => {
          return typeof value === "bigint" ? value.toString() : value;
        })
      );
      setPeople_water_bill(dataaa);
    })();
  }, [address]);

  /////////////////////////////////////////////////////////////////////////////

  async function people_spend1(): Promise<any> {
    await walletClient.writeContract({
      address: electro.smartContractAddress as `0x${string}`,
      abi: elctroabi.abi,
      functionName: "people_spend",
      args: [
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        electricity1,
        "electricity",
      ],
      account: address as `0x${string}`,
      chain: polygonZkEvmTestnet,
    });
  }

  async function people_spend2(): Promise<any> {
    await walletClient.writeContract({
      address: electro.smartContractAddress as `0x${string}`,
      abi: elctroabi.abi,
      functionName: "people_spend",
      args: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", water1, "water"],
      account: address as `0x${string}`,
      chain: polygonZkEvmTestnet,
    });
  }

  async function transfer(): Promise<any> {
    await walletClient.writeContract({
      address: electro.smartContractAddress as `0x${string}`,
      abi: elctroabi.abi,
      functionName: "peer",
      args: [send_func.address, send_func.coin],
      account: address as `0x${string}`,
      chain: polygonZkEvmTestnet,
    });
  }

  /////////////////////////////////////////////////////////////////////////////

  // const unwatch = publicClient.watchContractEvent({
  //   address: electro.smartContractAddress as `0x${string}`,
  //   abi: elctroabi.abi,
  //   eventName: 'Transfer',
  //   onLogs: logs => console.log(logs)
  // });
  // console.log(unwatch)

  // const [array,setArray]=useState([]);
  // const [array2,setArray2]=useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const data = await publicClient.readContract({
  //       address: electro.smartContractAddress as `0x${string}`,
  //       abi: elctroabi.abi,
  //       functionName: "fetching_log_int",
  //       args: [address],
  //       account: address as `0x${string}`,
  //     });
  //     const dataaa=JSON.parse(
  //       JSON.stringify(data, (key, value) => {
  //         return typeof value === "bigint" ? value.toString() : value;
  //       })
  //     );

  //     setArray(Object.values(data));
  //     console.log("data == "+data);
  //     console.log("data == "+dataaa.length);
  //     console.log("daaaaaaaaaata == "+array);

  //   })();
  // },[address]);

  // useEffect(() => {
  //   const getArrayData= async (val) => {
  //     const data = await publicClient.readContract({
  //       address: electro.smartContractAddress as `0x${string}`,
  //       abi: elctroabi.abi,
  //       functionName: "fetching_log_data",
  //       args: [val],
  //       account: address as `0x${string}`,
  //     });
  //     const dataaa=JSON.parse(
  //       JSON.stringify(data, (key, value) => {
  //         return typeof value === "bigint" ? value.toString() : value;
  //       })
  //     );
  //     let bu=JSON.parse(
  //       JSON.stringify(array2, (key, value) => {
  //         return typeof value === "bigint" ? value.toString() : value;
  //       })
  //     );
  //     let io=Object.values(data);
  //     setArray2([...array2,[data]]);
  //     console.log("fetch data is ===== "+dataaa);
  //     console.log("dadwdaw === "+array2);
  //   };
  //    getArrayData(array[0]);
  // },[]);

  ////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////

  return (
    <div className="flex flex-col gap-20">
      <div className=" flex flex-row justify-between">
        <div className="ml-36 mt-8 flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Redeem Coins</h1>
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
                      <h1 className="text-xl">{people_elec_bill}</h1>
                      <h1 className="w-72 break-all">
                        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
                      </h1>
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
                    <button
                      className="border-2 border-black px-8 rounded-md"
                      onClick={people_spend1}
                    >
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
                      <h1 className="text-xl">{people_water_bill}</h1>
                      <h1 className="w-72 break-all">
                        0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
                      </h1>
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
                    <button
                      className="border-2 border-black px-8 rounded-md"
                      onClick={people_spend2}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Peer To Peer Transfer</h1>
            <div className="flex flex-col gap-10  p-10 border border-4 border-black rounded-2xl">
              <div className="flex flex-row gap-20 justify-center">
                <input
                  placeholder="Address"
                  type="text"
                  autoComplete="off"
                  value={send_func.address}
                  onChange={handleInput2}
                  name="address"
                  id="address"
                  className="w-[400px] h-10 rounded-md border-2 border-black "
                ></input>
                <input
                  placeholder="Coin"
                  type="number"
                  autoComplete="off"
                  value={send_func.coin}
                  onChange={handleInput2}
                  name="coin"
                  id="coin"
                  className="h-10 rounded-md border-2 border-black "
                ></input>
              </div>
              <div className="flex flex-row justify-center">
                <button
                  className="border-2 border-black px-8 py-3 rounded-md font-bold text-lg"
                  onClick={transfer}
                >
                  Transaction
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black border-0 rounded-3xl h-[76vh] mr-7">
          <div className="grid grid-cols-2 gap-8">
            <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mt-28 ml-10 grid gap-6  rounded-2xl	 ">
              <h1 className="text-3xl font-semibold	">Total ElectroLite</h1>
              <h1 className="text-5xl">{people_total_amount}</h1>
            </div>
            <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mt-28  grid gap-6 mr-10 rounded-2xl	">
              <h1 className="text-3xl font-semibold	"> Total Waste</h1>
              <h1 className="text-5xl">{people_waste}</h1>
            </div>
            <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mb-28 ml-10  grid gap-6 rounded-2xl	">
              <h1 className="text-3xl font-semibold	"> Monthly Energy</h1>
              <h1 className="text-5xl">{people_elec_bill}</h1>
            </div>
            <div className="border-2 bg-white border-black shadow-md shadow-slate-100 py-16 px-2 mb-28 mr-10  grid gap-6 rounded-2xl	">
              <h1 className="text-3xl font-semibold	"> Total Redeem Coin</h1>
              <h1 className="text-5xl">{people_deducted_amount}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-36">
        <h1 className="text-3xl font-bold">Chat Bot</h1>
        <div className="flex flex-col gap-10  p-10 border border-4 border-black rounded-2xl">
          <div className="flex flex-row gap-10">
            <input
              placeholder="Text"
              type="text"
              autoComplete="off"
              value={gemini_data}
              onChange={handleInput3}
              name="gem"
              id="gem"
              className="w-[1500px] h-10 rounded-md border-2 border-black "
            ></input>

            <button
              className="border-2 border-black px-8 py- rounded-md font-bold text-lg"
              onClick={fetchDataFromGemini}
            >
              Generate
            </button>
          </div>
          <div className="w-[1270px]  break-all">
            <h1 className=" text-lg font-medium "> Response :</h1> <br />
            {fetch_gemini_data}
          </div>
        </div>
      </div>
    </div>
  );
}
