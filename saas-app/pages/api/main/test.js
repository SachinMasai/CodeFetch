const connect = require("../../../config/db");
const User = require("../../../featurs/users/user.model");

export default async function addUser(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connect();
    console.log("CONNECTED TO MONGO");
    
    let response = await fetch("http://localhost:3000/api/main/users");
    // extract the data
    let data = await response.json();
    // console.log("CREATING DOCUMENT");
    // const user = await User.create(req.body);
    // console.log("CREATED DOCUMENT");
    // res.json("connected");
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
