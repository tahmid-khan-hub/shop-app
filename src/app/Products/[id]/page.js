import Footer from "@/app/Footer/page";
import Navbar from "@/app/Navbar/page";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const res = await fetch(`https://shop-app-server-six.vercel.app/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <>
      <div className="min-h-screen w-full bg-[#020617] relative">
        <Navbar></Navbar>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
          }}
        />
        <div className="max-w-[1300px] mx-auto min-h-screen p-6">
          <div className="grid md:grid-cols-[50%_50%] gap-8 bg-base-100 shadow-xl p-6 rounded-2xl">
            {/* Image section */}
            <div className="relative w-full h-96">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-xl mx-auto h-full"
              />
            </div>

            {/* Text section */}
            <div className="space-y-4 flex flex-col justify-center">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.description}</p>
              <p className="text-2xl font-semibold">${product.price}</p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
