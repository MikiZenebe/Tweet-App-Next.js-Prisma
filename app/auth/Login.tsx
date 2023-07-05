"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        className="bg-cyan-600 text-white py-1 px-2 font-semibold rounded-lg"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}
