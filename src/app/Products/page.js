import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import Loader from "../Loader/page";

export const metadata = {
  title: "ShopApp | Products",
  description: "Browse our awesome products",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div><Loader></Loader></div>}>
      <ProductsClient />
    </Suspense>
  );
}
