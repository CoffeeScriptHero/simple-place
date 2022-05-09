const mongoose = require("mongoose");
const CommentSchema = require("./CommentModel").commentSchema;

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
  comments: [CommentSchema],
  likes: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
