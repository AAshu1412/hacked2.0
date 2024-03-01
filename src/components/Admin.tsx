import { useState } from "react";
export default function Admin() {
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

  const calculatePrice = () => {
    const totalCost = basePrice + wet + dry;
    const totalPrice = totalCost * surgeMultiplication;
    return totalPrice; // To display only two decimal places
  };

  const calculatemorePrice = () => {
    const moretotalCost = morebasePrice + morewet + moredry;
    const moretotalPrice = moretotalCost * moresurgeMultiplication;
    return moretotalPrice; // To display only two decimal places
  };

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
            <p className="text-xl text-black font-semibold">
              Total Price: ₹{calculatePrice()}
            </p>
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
            <p className="text-xl text-black font-semibold">
              Total Price: ₹{calculatemorePrice()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20  gap-10 items-center  ">
        <div className="flex flex-col gap-4 items-center ">
            <h1 className="text-xl font-bold text-black">Enter User Address and Waste (Kg)</h1>
            <div className="flex flex-row gap-10">
            <input  className="w-[900px] h-12 rounded-md border-2 border-black " placeholder="User Address"></input>
            <input  className="w-[200px] h-12 rounded-md border-2 border-black " placeholder="Waste"></input>

            </div>

        </div>
        <button  className="w-36 border-2 border-black px-8 py-3 rounded-md font-bold text-lg">Send</button>
      </div>
    </div>
  );
}
