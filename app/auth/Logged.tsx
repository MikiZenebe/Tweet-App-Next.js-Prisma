"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";

type ImageProps = {
  image: any;
};

export default function Logged(props: ImageProps) {
  return (
    <li className="flex items-center gap-4">
      <button
        onClick={() => signOut()}
        className="relative inline-flex items-center justify-center  px-3 py-1 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-pink-600 rounded-lg  group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-600 group-hover:translate-x-0 ease">
          <HiLogout className="w-6 h-6" />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full font-semibold text-black transition-all duration-300 transform group-hover:translate-x-full ease">
          Sign Out
        </span>
        <span className="relative invisible">Sign Out</span>
      </button>

      <Link href={"/dashboard"}>
        {" "}
        <Image
          className="rounded-full object-cover"
          src={props.image}
          width={45}
          height={45}
          alt=""
        />
      </Link>
    </li>
  );
}
