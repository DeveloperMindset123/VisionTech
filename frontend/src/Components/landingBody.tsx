import React from "react";
import Image from "next/image";

export default function LandingBodyContext() {
  return (
    <div className="grid gap-64 gap-x-64 my-32 grid-cols-2">
      <div className="text-purple-900 text-9xl p-16 mx-20">
        Vision Tech
        <div className="text-7xl w-[600px] p-8 text-[#c5a2f4]">
          Blockchain to protect your company data
          <button className="bg-gradient-to-r from-[#993fde] to-[#1A1828] text-white font-bold border-b-4 w-[320px] h-24 rounded-xl text-4xl items-end hover:bg-purple-500 my-16">
            See Demo
          </button>
        </div>
      </div>
      <Image
        className="w-[800px]"
        src="/Group.png"
        width={900}
        height={200}
        alt="secondaryImage"
      />
    </div>
  );
}
