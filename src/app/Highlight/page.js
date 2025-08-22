"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader/page";

export default function HighlightSection() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
        const res = await fetch("/data.json");
        if (!res.ok) {
        throw new Error("Network response was not ok");
        }
        return res.json();
    },
  });

  if (isLoading) return <Loader></Loader>;

  return (
    <div className="my-24">
      <h1 className="text-center text-3xl font-bold text-white mb-8">Products Highlights</h1>
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 max-w-[1300px] mx-auto">
        {products.map((product, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
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
