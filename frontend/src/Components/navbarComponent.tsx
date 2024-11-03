import React from "react";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <div className="flex flex-row flex-grow mx-40">
      <Image
        // NOTE : Image Rendering has been fixed, public is exposed to root
        // @see https://stackoverflow.com/questions/71617582/i-am-getting-the-error-the-requested-resource-isnt-a-valid-image-for-public-l
        className="-mt-10 mx-2"
        src="/Money.png"
        width={200}
        height={200}
        alt="logo"
      />
      <div className="mx-52 mt-2 text-5xl">Home</div>
      <div className="mx-24 mt-2 w-52 text-5xl">About Us</div>
      <button className="bg-gradient-to-r from-[#993fde] to-[#1A1828] text-white font-bold border-b-4 w-[300px] h-20 rounded-xl text-3xl items-end hover:bg-purple-500 ml-[900px]">
        Get Started
      </button>
    </div>
  );
}
