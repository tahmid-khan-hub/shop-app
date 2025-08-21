import Link from "next/link";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import Hero from "./Hero/page";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Emerald Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
        }}
      />

      {/* Components */}
      <div className="relative z-10">
        <Navbar />
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </div>
  );
}

