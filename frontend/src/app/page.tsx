import Image from "next/image";
import NavbarComponent from "@/Components/navbarComponent";
import LandingBodyContext from "@/Components/landingBody";
export default function Home() {
  return (
    <div className="min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <NavbarComponent />
      <LandingBodyContext />
    </div>
  );
}
