"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/Dashboard/Addproduct" className="hover:text-gray-300">
              Add Product
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Allproducts" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="hover:text-gray-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}