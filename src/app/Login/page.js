"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {" "}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        {" "}
        <h1 className="text-2xl font-bold mb-6">
          Login
        </h1> {/* Google Login */}{" "}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded mb-4"
        >
          {" "}
          Sign in with Google{" "}
        </button>{" "}
        {/* Optional: Credential Login */}{" "}
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
          {" "}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />{" "}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded"
          />{" "}
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
            {" "}
            Login with Credentials{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}