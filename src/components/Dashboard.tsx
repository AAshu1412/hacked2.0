import React from "react";



export default function Dashboard() {

  return (
    <div className="bg-blue-200">
        <div className="flex flex-row justify-center">
        <div className="grid grid-cols-4 gap-12">
            <div className="border-2 border-black p-10 grid gap-6  rounded-2xl	 ">
<h1 className="text-3xl font-semibold	">Total ElectroLite</h1>
<h1 className="text-5xl">100</h1>
            </div>
            <div className="border-2 border-black p-10 grid gap-6 rounded-2xl	">
           <h1 className="text-3xl font-semibold	"> Total Waste</h1>
           <h1 className="text-5xl">100</h1>

                </div>
                <div className="border-2 border-black p-10 grid gap-6 rounded-2xl	">
              <h1 className="text-3xl font-semibold	"> Monthly Energy</h1> 
              <h1 className="text-5xl">100</h1>

                </div>
                <div className="border-2 border-black p-10 grid gap-6 rounded-2xl	">
               <h1 className="text-3xl font-semibold	"> Total Redeem Coin</h1>
               <h1 className="text-5xl">100</h1>

                </div>
        </div>
        </div>
    
    </div>
  );
}
