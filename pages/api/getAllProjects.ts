import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import IProjects from "models/IProjects";

const url = process.env.MONGODB_URL;
const client = new MongoClient(url as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.connect();
  const db = client.db("BLGN");
  const collection = db.collection("Projects");
  const data = await collection.find({}).toArray();

  res.json(data);
  client.close();
}
