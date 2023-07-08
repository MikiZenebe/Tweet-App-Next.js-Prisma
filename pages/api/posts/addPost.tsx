import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "Please sign in to make a post" });

    const title: string = req.body.title;

    //Check title
    if (title.length > 300)
      return res.status(403).json({ message: "Please write a shorter post" });
    if (title.length < 0)
      return res.status(403).json({ message: "Don't leave it empty" });
  }
}
