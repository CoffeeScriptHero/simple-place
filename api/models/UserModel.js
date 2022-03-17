const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  subscriptions: {
    type: [String],
    required: true,
  },
  subscribers: {
    type: [String],
    required: true,
  },
  posts: {
    type: [String],
    required: true,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
