import Link from "next/link";
import React from "react"
import { ShoppingCart,ShoppingBag } from "lucide-react";
export default function Navbar() {
  return (
    <div className="w-full h-[45px] bg-gray-50 flex justify-around items-center px-4 py-8">
        <div className="flex flex-2/6 items-center gap-2">
            {/* <div className="w-[51px] h-[44px] rounded-[16px] bg-[#40BFFF] flex items-center justify-center">
                <div style={{width: "19.56px", height: "22.67px", top: "12.22px", left: "14.17px", transform: "rotate(-90 deg)"}}>
                    <div style={{width: "19.56px", height: "22.67px", top: "12.22px", left: "14.17px", transform: "rotate(-90 deg)"}}>
                        <div className="bg-[#FFFFFF]" style={{width: "19.56px",height: "22.67px",top: "12.22px",left: "14.17px",transform: "rotate(-90 deg)"}}></div>
                    </div>
                </div>
            </div> */}
            <ShoppingBag size={30} color="#40BFFF"/>
            <h1 className="font-bold text-[24px] font-poppins text-[#22262A]">E-comm</h1>
        </div>
        <div className="flex flex-3/6 justify-between items-center gap-30 text-bold font-poppins text-[#22262A]">
            <Link href="/home" className="text-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">HOME</Link>
            <Link href="/bag">BAG</Link>
            <Link href="/sneakers">SNEAKERS</Link>
            <Link href="/belt">BELT</Link>
            <Link href="/home">MAIN</Link>
            <Link href="/contact">CONTACT</Link>
        </div>
        <div className="flex flex-1/6 pl-10 items-center gap-3">
            <ShoppingCart size={20} color="#22262A"/>
            <h1 className="font-poppins text-[16px] text-[#22262A]">Items</h1>
            <h1 className="text-gray-500">$0.00</h1>
        </div>
    </div>
  );
}
