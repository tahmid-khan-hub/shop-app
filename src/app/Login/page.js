"use client";

import { signIn } from "next-auth/react";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/Products" });
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#020617] relative">
        {/* Emerald Radial Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
          }}
        />
        <Navbar></Navbar>
        <div className="min-h-screen flex items-center justify-center">
          <div className="card w-full max-w-md bg-base-100 shadow-md">
            <div className="card-body">
              {/* Header */}
              <h2 className="text-3xl font-bold text-center mb-11">
                Login
              </h2>

              {/* Credentials Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  const password = e.target.password.value;
                  await signIn("credentials", {
                    email,
                    password,
                    callbackUrl: "/Products",
                  });
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <button type="submit" className="btn btn-neutral w-full">
                  Login
                </button>
              </form>

              {/* Divider */}
              <div className="divider">OR</div>

              {/* Google Login */}
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#abf4a9] flex items-center gap-2"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
