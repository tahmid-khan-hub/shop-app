import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Automatically redirect to /dashboard/add-product
  redirect("/Dashboard/Addproduct");
}