import clientPromise from "../../database/dbConnect";
import Users from "../../model/user.model";

export default async function register(req, res) {
  const { method } = req;
  const client = await clientPromise;
  const db = client.db("codefetch");

  switch (method) {
    case "GET":
      try {
        const usersData = await db.Users.find({});
        res.status(200).json({ success: true, data: usersData });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const userCreds = req.body;
        if (userCreds["avatar"] === undefined) {
          // userCreds = {
          //   ...userCreds,
          //   avatar: "",
          // };
          userCreds["avatar"] = "";
        }
        console.log(userCreds);
        // let myPost = await db.collection("users").insertOne(userCreds);
        const user = await Users.create(userCreds);
        res.status(201).json({ success: true, data: user });
        // res.send("post user route");
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
