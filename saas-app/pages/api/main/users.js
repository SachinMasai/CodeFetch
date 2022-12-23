// const { connectToDatabase } = require("../../../database/db");
const connect = require("../../../config/db");
import User from "../../../featurs/users/user.model";
// import Users from "../../../model/user.model";
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getUsers(req, res);
    }

    case "POST": {
      return addUser(req, res);
    }

    case "PUT": {
      return updatePost(req, res);
    }

    case "DELETE": {
      return deletePost(req, res);
    }
  }
}

// Getting all posts.
async function getUsers(req, res) {
  try {
    await connect();
    let users = await User.find({});
    return res.json({
      message: JSON.parse(JSON.stringify(users)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

// Adding a new user
async function addUser(req, res) {
  try {
    await connect();
    // let { name, email, password, image } = req.body;
    // const newUser = {
    //   name: name,
    //   email: email,
    //   password: password,
    //   image: image,
    // };
    // console.log(newUser);
    let userCreds = req.body;
    const newUser = {
      name: userCreds.userData.name,
      email: userCreds.userData.email,
      password: userCreds.userData.password,
      image: userCreds.userData.image,
    };
    console.log(newUser);
    // console.log(userCreds);
    const user = await User.create(userCreds);
    res.json({ user });
    // console.log(req.body);
    // await User.create(req.body);
    // let { db } = await connectToDatabase();
    // await db.collection("users").insertOne(JSON.parse(req.body));
    // return res.json({
    //   message: "user created successfully",
    //   success: true,
    //   user: user,
    // });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

// Updating a post
async function updatePost(req, res) {
  try {
    let { db } = await connectToDatabase();

    await db.collection("posts").updateOne(
      {
        _id: new ObjectId(req.body),
      },
      { $set: { published: true } }
    );

    return res.json({
      message: "Post updated successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

// deleting a post
async function deletePost(req, res) {
  try {
    let { db } = await connectToDatabase();

    await db.collection("posts").deleteOne({
      _id: new ObjectId(req.body),
    });

    return res.json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
