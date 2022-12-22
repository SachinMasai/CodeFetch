import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  avatar: String,
  password: String,
  confirmpassword: String,
});

module.exports = mongoose.models.Users || model("Users", userSchema);
