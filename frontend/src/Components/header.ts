import React from "react";
import Image from "next/image";
import Link from "next/link";
import manImage from "../public/man.png";
import monkeImage from "../public/monke.png";

interface HeaderProps {
  isModalOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isModalOpen }) => {
  return (
    <header
      className={`flex justify-between items-center p-4 ${
        isModalOpen ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      <Image src="/piggy-bank.png" alt="Piggy Bank" width={40} height={40} />
      <h1 className="text-2xl font-bold">Vision Tech</h1>
      <Image
        src={manImage}
        alt="Man"
        width={40}
        height={40}
        className="rounded-full"
      />
    </header>
  );
};

export default Header;
