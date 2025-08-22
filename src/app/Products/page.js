import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProductsPage() {
  const session = await getServerSession();

  if (!session) redirect("/login");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <p>Welcome, {session.user?.name}</p>
    </div>
  );
}