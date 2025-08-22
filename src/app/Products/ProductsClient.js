"use client";

import Image from "next/image";
import Footer from "../Footer/page";
import Loader from "../Loader/page";
import Navbar from "../Navbar/page";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function ProductsClient() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("login") === "success") {
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [searchParams]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/products");
      return res.data;
    },
  });

  if (isLoading) return <Loader></Loader>;

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
      <h1 className="text-3xl text-center text-white font-bold mt-11 mb-7">
        Products
      </h1>
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 max-w-[1300px] mx-auto">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-xl">
            <div className="card-body flex flex-col">
              {/* Image */}
              <img
                src={product.image}
                alt="product-image"
                className="w-[200px] object-contain mx-auto"
              />

              {/* Text content */}
              <div className="mt-auto text-left">
                <h2 className="card-title text-xl mt-4">{product.name}</h2>
                <p className="font-bold mt-9">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
