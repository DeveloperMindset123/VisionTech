"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { TypographySmall } from "./ui/smallText";
import { Button } from "./ui/button";

export const AuthenticationModal = () => {
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
