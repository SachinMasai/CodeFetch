const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
mongoose.models = {};
const Post = mongoose.model.post || mongoose.model("post", PostSchema);

// module.exports = Post;
// mongoose.models.Post ||
