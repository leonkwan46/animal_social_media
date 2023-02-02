const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    date: {
      type: String,
    },
    bio: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    coverPic: {
      type: String,
    },
    following: {
      type: [String],
    },
    followers: {
      type: [String],
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", userSchema);
