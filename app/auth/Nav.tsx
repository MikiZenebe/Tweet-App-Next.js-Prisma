import Link from "next/link";
import React from "react";
import Login from "./Login";
import Logged from "./Logged";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Nav() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex items-center justify-between py-5 bg-slate-100">
      <Link href={"/"}>
        <h1 className="font-bold text-2xl ">Tweet</h1>
      </Link>

      <ul>
        {!session?.user && <Login />}
        {session?.user && <Logged image={session?.user?.image} />}
      </ul>
    </nav>
  );
}
