const connect = require("../../../config/db");
const Post = require("../../../featurs/posts/posts.model");

export default async function addPost(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connect();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const post = await Post.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ post });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
