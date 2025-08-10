// pages/login.tsx
import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await res.json();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#171D22] text-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#1f2730] rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        {error && (
          <p className="bg-red-500/20 text-red-400 p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 rounded bg-[#2c3440] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-[#2c3440] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition p-2 rounded font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-red-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
