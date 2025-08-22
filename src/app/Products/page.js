
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

export default async function ProductsPage() {

  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Emerald Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
        }}
      />
      <Navbar></Navbar>
      <h1 className="text-3xl text-center text-white font-bold">Products</h1>

      <Footer></Footer>
    </div>
  );
}