"use client";

import React from "react";
import AddPost from "./components/AddPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Posts from "./components/Posts";
import { PostType } from "./types/Posts";

//Fetch all Posts
const allPosts = async () => {
  const res = await axios.get("/api/posts/getPost");
  return res.data;
};

export default function page() {
  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ["posts"], //It's gonna cache the posts
  });

  if (isLoading) return "Loading...";
  return (
    <main>
      <AddPost />

      {data?.map((post) => (
        <Posts
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          comments={post.Comment}
          id={post.id}
        />
      ))}
    </main>
  );
}
