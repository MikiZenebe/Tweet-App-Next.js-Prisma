"use clinet";

import Image from "next/image";
import Link from "next/link";

type postProps = {
  name: string;
  avatar: any;
  postTitle: string;
};

export default function Posts(props: postProps) {
  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={props.avatar}
          alt="avatar"
        />
        <h3 className="font-bold text-gray-700">{props.name}</h3>
      </div>

      <div className="my-4">
        <p className="break-all">{props.postTitle}</p>
      </div>
    </div>
  );
}
