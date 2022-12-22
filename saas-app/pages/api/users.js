import clientPromise from "../../database/dbConnect";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_mflix");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("posts").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allUsers = await db
        .collection("comments")
        .find({})
        .limit(10)
        .toArray();
      res.json({ status: 200, data: allUsers });
      break;
  }
}
