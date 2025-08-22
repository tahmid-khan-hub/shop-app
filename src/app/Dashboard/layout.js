"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  FaPlus,
  FaBoxOpen,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import brand from "../../../public/shopping-bag.png"

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for large screens */}
      <aside className="hidden md:block w-64 bg-gray-800 text-white p-6">
        <div className="flex mb-7 -ml-3">
          <Image className="w-8 mr-2 ml-2.5" src={brand} alt="shopApp Logo" />
          <a className="text-xl font-semibold text-emerald-500">
            Shop<span className="text-2xl">A</span>pp
          </a>
        </div>
        <ul className="space-y-4">
          <li>
            <Link
              href="/Dashboard/Addproduct"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaPlus /> Add Product
            </Link>
          </li>
          <li>
            <Link
              href="/Dashboard/Allproducts"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaBoxOpen /> Products
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800 bg-gray-200 p-2 rounded-md"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-6 z-40 md:hidden">
          <div className="flex mb-7 ml-7">
            <Image className="w-8 mr-2 ml-2.5" src={brand} alt="shopApp Logo" />
            <a className="text-xl font-semibold text-emerald-500">
              Shop<span className="text-2xl">A</span>pp
            </a>
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                href="/Dashboard/Addproduct"
                className="flex items-center gap-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                <FaPlus /> Add Product
              </Link>
            </li>
            <li>
              <Link
                href="/Dashboard/Allproducts"
                className="flex items-center gap-2 hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                <FaBoxOpen /> Products
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="flex items-center gap-2 hover:text-gray-300"
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </aside>
      )}

      {/* Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}