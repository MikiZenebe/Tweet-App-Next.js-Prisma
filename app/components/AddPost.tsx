"use client";

import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  //Create a post
  const { mutate } = useMutation(
    async (title) => await axios.post("/api/posts/addPost", { title })
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form
      onSubmit={submitPost}
      className="bg-white drop-shadow-lg  my-8 p-5 rounded-lg"
    >
      <div className="flex flex-col my-2">
        <p className="text-md font-semibold text-cyan-900 pb-4">
          Add a new post
        </p>
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="transition-all duration-[300ms] border-2 ease-out p-2 text-lg rounded-lg my-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
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
ease-out hover:bg-cyan-900 hover:text-white text-sm border-cyan-900 border-2 py-1.5 px-2 rounded-md text-cyan-900 font-semibold`} ${
            isDisabled
              ? "cursor-not-allowed hover:bg-white hover:text-cyan-900"
              : ""
          }`}
        >
          {isDisabled ? "Loading..." : "Create a Post"}
        </button>
      </div>
    </form>
  );
}
