"use client";

import React, { useState } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form className="bg-white drop-shadow-lg  my-8 p-8 rounded-lg">
      <div className="flex flex-col my-4">
        <p className="text-md font-semibold text-cyan-900 pb-4">
          Add a new post
        </p>
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="transition-all duration-[300ms] border-2 ease-out p-4 text-lg rounded-lg my-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      <div className="flex justify-between items-center">
        <p
          className={`font-bold text-cyan-950 text-sm ${
            title.length > 300 ? "text-pink-800" : ""
          }`}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          type="submit"
          className={`${`transition-all duration-[300ms]
ease-out hover:bg-cyan-900 hover:text-white border-cyan-900 border-2 py-1.5 px-2 rounded-md text-cyan-900 font-semibold`}`}
        >
          Create a Post
        </button>
      </div>
    </form>
  );
}
