const connect = require("../../../config/db");
const User = require("../../../featurs/user/user.model");

export default async function addUser(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connect();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const user = await User.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
