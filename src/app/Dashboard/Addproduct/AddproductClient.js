"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; 
import Loader from "@/app/Loader/page";

export default function AddProductClient() {
  const router = useRouter();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  const { register, handleSubmit, reset } = useForm();

  const mutation = useMutation({
    mutationFn: async (newProduct) => {
      const res = await axiosSecure.post("/products", newProduct);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: "Your product has been successfully added.",
      });
      reset();
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    },
  });

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    router.push("/login"); 
    return null;
  }

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-11">
      <h2 className="text-3xl font-bold text-center mb-7">Add Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Price"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full btn bg-emerald-500 hover:bg-emerald-600 border border-emerald-700 mt-4"
        >
          {mutation.isPending ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
