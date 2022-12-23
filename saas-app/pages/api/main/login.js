// const { connectToDatabase } = require("../../../database/db");
const connect = require("../../../config/db");
import { useDispatch } from "react-redux";
import User from "../../../featurs/users/user.model";
import { loginUser } from "../../../redux/auth/authSlice";
// import Users from "../../../model/user.model";
const ObjectId = require("mongodb").ObjectId;

export default async function loginHandler(req, res) {
  // switch the methods
  switch (req.method) {
    // case "GET": {
    //   return getUsers(req, res);
    // }

    case "POST": {
      return login(req, res);
    }
  }
}

// Getting all users.
// async function getUsers(req, res) {
//   try {
//     await connect();
//     let users = await User.find({});
//     return res.json({
//       message: JSON.parse(JSON.stringify(users)),
//       success: true,
//     });
//   } catch (error) {
//     return res.json({
//       message: new Error(error).message,
//       success: false,
//     });
//   }
// }

// logging user
async function login(req, res) {
  try {
    await connect();
    const { email, password } = req.body;

    const user = await User.find({ email: email, password: password });
    console.log(user);
    res.json({ user });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
