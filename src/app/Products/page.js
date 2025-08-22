// app/Products/page.js (server component)
import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "ShopApp | Products",
  description: "Browse our awesome products",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
