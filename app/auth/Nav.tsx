import Link from "next/link";
import React from "react";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href={"/"}>
        <h1 className="font-bold text-2xl ">Tweet</h1>
      </Link>

      <ul>
        {!session?.user && <p>Sign Up</p>}
        {session?.user && <h1>{session?.user?.name}</h1>}
      </ul>
    </nav>
  );
}
