"use client";
import React, { useState } from "react";
import Image from "next/image";
//import SigninModal from "./signinModal";
//import LoginModal from "./signinModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TypographySmall } from "./ui/smallText";
import { AuthenticationModal } from "./authenticationModal";
import { redirect } from "next/navigation";

export default function NavbarComponent() {
  const AuthenticationModal = () => {
    const [currModal, setCurrModal] = useState("sign in");

    const SigninModal = () => {
      return (
        <Dialog>
          <DialogTrigger>Get Started</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-4xl mx-3">Sign In</DialogTitle>
              <DialogDescription>
                <Input
                  // twMerge allows us to pass in css directly into components
                  className="my-5 text-xl"
                  placeholder="Enter your Email..."
                />
                <Input
                  type="password"
                  placeholder="Enter Your Password..."
                  // twMerge allows us to pass in css directly into components
                  className="my-5 text-xl"
                />
                <TypographySmall>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setCurrModal("signin")}
                    className="bg-transparent text-[#5E548E]"
                  >
                    Sign Up Now
                  </button>
                </TypographySmall>
                <Button className="mt-5 mx-auto items-center justify-center w-full h-12 text-lg">
                  Sign In
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    };

    const SignupModal = () => {
      return (
        <Dialog>
          {/*<DialogTrigger>Get Started</DialogTrigger> */}
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-4xl mx-3">Sign Up</DialogTitle>
              <DialogDescription>
                <Input
                  // twMerge allows us to pass in css directly into components
                  className="my-5 text-xl"
                  placeholder="Enter your Email..."
                />
                <Input
                  type="password"
                  placeholder="Enter Your Password..."
                  // twMerge allows us to pass in css directly into components
                  className="my-5 text-xl"
                />
                <TypographySmall>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setCurrModal("signup")}
                    className="bg-transparent text-[#5E548E]"
                  >
                    Sign Up Now
                  </button>
                </TypographySmall>
                <Button className="mt-5 mx-auto items-center justify-center w-full h-12 text-lg">
                  Sign In
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    };
    return currModal === "sigin" ? <SigninModal /> : <SignupModal />;
  };

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
        {/*<AuthenticationModal /> */}

        <Dialog>
          <DialogTrigger>Get Started</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-4xl mx-3">Sign In</DialogTitle>
              <DialogDescription>
                <Input
                  // twMerge allows us to pass in css directly into components
                  className="my-5 text-xl"
                  placeholder="Enter your Email..."
                />
                <Input
                  type="password"
                  placeholder="Enter Your Password..."
                  // twMerge allows us to pass in css directly into components
                  className="my-5 text-xl"
                />
                <TypographySmall>
                  {" "}
                  Don't have an account?{" "}
                  <button
                    //onClick={() => {setCurrModal("signup")}}
                    className="bg-transparent text-[#5E548E]"
                  >
                    Sign Up Now
                  </button>
                </TypographySmall>
                <Button
                  onClick={() => redirect("/dashboard")}
                  className="mt-5 mx-auto items-center justify-center w-full h-12 text-lg"
                >
                  Sign In
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
