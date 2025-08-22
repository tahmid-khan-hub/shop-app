"use client";

import Loader from "@/app/Loader/page";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AllProductClient() {
    const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/products");
      return res.data;
    },
  });

  if (isLoading) return <Loader></Loader>;
  return (
    <div className="">
      <h1 className="text-3xl text-center text-black font-bold mt-11 mb-7">
       All Products
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
    </div>
  );
}
