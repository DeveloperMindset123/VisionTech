import React from "react";
import Image from "next/image";
//import SigninModal from "./signinModal";
import LoginModal from "./signinModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function NavbarComponent() {
  return (
    <div className="flex gap-24">
      <Image
        // NOTE : Image Rendering has been fixed, public is exposed to root
        // @see https://stackoverflow.com/questions/71617582/i-am-getting-the-error-the-requested-resource-isnt-a-valid-image-for-public-l
        className="-mt-10 mx-16 flex-initial"
        src="/Money.png"
        width={200}
        height={200}
        alt="logo"
      />
      <div className="flex-none mx-52 mt-2 text-5xl">Home</div>
      <div className="flex-none mx-24 mt-2 w-52 text-5xl">About Us</div>
      {/*<button className="bg-gradient-to-r from-[#993fde] to-[#1A1828] text-white font-bold border-b-4 w-[300px] h-20 rounded-xl text-3xl items-end hover:bg-purple-500 ml-[900px]">
        Get Started
      </button> */}
      <div className="flex-none justify-end text-5xl bg-gradient-to-r from-[#993fde] to-[#1A1828] text-white font-bold border-b-4 w-[320px] rounded-xl h-24 py-5 hover:bg-purple-500 items-center text-center translate-x-[500px]">
        <Dialog>
          <DialogTrigger>Get Started</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
