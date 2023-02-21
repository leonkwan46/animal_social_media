const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
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
    numOfFollowing: {
      type: Number,
      default: 0,
    },
    numOfFollowers: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", userSchema);