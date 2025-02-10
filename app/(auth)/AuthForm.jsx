"use client";
import { useState } from "react";

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
      className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 space-y-6"
    >
      <div className="flex flex-col">
        <label className="text-yellow-50 text-lg font-semibold mb-2">
          Email:
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="w-full p-3 bg-gray-800 text-yellow-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-yellow-50 text-lg font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className="w-full p-3 bg-gray-800 text-yellow-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-bold hover:bg-yellow-400 transition-all"
      >
        Submit
      </button>
    </form>
  );
}