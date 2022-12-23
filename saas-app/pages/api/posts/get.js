const connect = require("../../../config/db");
const Post = require("../../../featurs/posts/posts.model");

export default async function getPost(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connect();

    const post = await Post.find();

    res.json({ post });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
