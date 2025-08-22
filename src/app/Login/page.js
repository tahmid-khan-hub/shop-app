"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-md shadow-md">
        <div className="card-body">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

          {/* Credentials Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const email = e.target.email.value;
              const password = e.target.password.value;
              await signIn("credentials", {
                email,
                password,
                callbackUrl: "/products",
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
            className="btn w-full bg-red-500 text-white hover:bg-red-600"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}