const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  likes: [String],
});

const CommentModel = mongoose.model("comment", CommentSchema);

const CommentObject = {
  commentModel: CommentModel,
  commentSchema: CommentSchema,
};

module.exports = CommentObject;
