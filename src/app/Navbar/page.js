"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "../Loader/page";
import brand from "../../../public/shopping-bag.png"
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loader />;
  }

  const links = (
    <>
      <li>
        <Link href="/" className="font-semibold text-emerald-500 hover:text-emerald-600">
          Home
        </Link>
      </li>
      <li>
        <Link href="/Products" className="font-semibold text-emerald-500 hover:text-emerald-600">
          Products
        </Link>
      </li>
      {session && (
        <li>
          <Link href="/Dashboard" className="font-semibold text-emerald-500 hover:text-emerald-600">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-background/55 backdrop-blur-md text-white">
      <div className="max-w-[1300px] w-[96%] mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="navbar-start">
            <Image className="w-8 mr-2 ml-2.5" src={brand} alt="shopApp Logo"></Image>
            <a className=" text-xl font-semibold text-emerald-500">Shop<span className="text-2xl">A</span>pp</a>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {!session ? (
            <button className="btn mr-2.5" onClick={() => router.push("/Login")}>
              Login
            </button>
          ) : (
            <button
              className="btn mr-2.5"
              onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
