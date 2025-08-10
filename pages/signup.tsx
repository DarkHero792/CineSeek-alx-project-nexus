// pages/signup.tsx
import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password1 !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          first_name: firstName,
          last_name: lastName,
          password1,
          password2,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        const errMsg = Object.values(errData).flat().join(" ");
        throw new Error(errMsg || "Failed to create account");
      }

      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#171D22] text-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#1F2933] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#171D22] border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#171D22] border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#171D22] border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#171D22] border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#171D22] border border-gray-600 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#171D22] border border-gray-600 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#E2D609] text-black font-bold rounded hover:bg-yellow-400 transition"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-[#E2D609] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
