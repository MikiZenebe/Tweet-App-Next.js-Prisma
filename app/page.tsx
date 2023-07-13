"use client";

import React from "react";
import AddPost from "./components/AddPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Posts from "./components/Posts";

//Fetch all Posts
const allPosts = async () => {
  const res = await axios.get("/api/posts/getPost");
  return res.data;
};

export default function page() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"], //It's gonna cache the posts
  });

  if (isLoading) return "Loading...";
  return (
    <main>
      <AddPost />

      {data?.map((post: any) => (
        <Posts
          key={post._id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
        />
      ))}
    </main>
  );
}
