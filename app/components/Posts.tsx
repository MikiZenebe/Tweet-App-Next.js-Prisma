"use clinet";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineComment } from "react-icons/ai";

type postProps = {
  name: string;
  avatar: any;
  postTitle: string;
  comments: string;
  id: any;
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

      <div className="flex gap-4 cursor-pointer items-center">
        <Link href={`/post/${props.id}`}>
          <p className="relative flex gap-2 items-center text-md font-bold text-gray-700">
            <AiOutlineComment />{" "}
            <span className="absolute left-2.5 bottom-[5px] bg-red-600 text-white text-sm h-4 w-4 flex items-center justify-center rounded-full">
              {props.comments?.length}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
