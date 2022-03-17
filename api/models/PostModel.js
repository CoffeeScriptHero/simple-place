const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
  comments: [Object],
  likes: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
