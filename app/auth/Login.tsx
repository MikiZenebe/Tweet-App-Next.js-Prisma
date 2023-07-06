"use client";

import { signIn } from "next-auth/react";
import { HiLogin } from "react-icons/hi";

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="relative inline-flex items-center justify-center  px-3 py-1 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-cyan-600 rounded-lg  group"
      >
        <span className="absolute flex items-center justify-center w-full h-full font-semibold text-black transition-all duration-300 transform group-hover:translate-x-full ease">
          Sign In
        </span>
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
          <HiLogin className="w-6 h-6" />
        </span>
        <span className="relative invisible">Sign In</span>
      </button>
    </li>
  );
}
