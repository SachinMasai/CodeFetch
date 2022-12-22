const mongoose = require("mongoose");
// require("dotenv").config();

const connect = async () => {
  return await mongoose.connect(
    `mongodb+srv://vijaya:saas@cluster0.qcgj6ue.mongodb.net/codefetch?retryWrites=true&w=majority`
  );
};

module.exports = connect;
