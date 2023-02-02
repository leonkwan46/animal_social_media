const express = require("express");
const router = express.Router();
const Messages = require("../db/messageModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const protected = require("../middleware/authMiddleware");
const asyncHandler = require("express-async-handler");

//get all posts to create feed
router.get("/", protected, async (req, res, next) => {
  console.log(req.body);
  try {
    const message = await Messages.find();
    console.log("check1");
    // check if password is matched
    if (message) {
      console.log(message);
      res.status(200).json(message);
    } else {
      res.status(400);
      throw new Error("No Message Found!");
    }
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
    next(err);
  }
});

//create post
router.post("/", protected, async (req, res, next) => {
  // Check if text data is there
  if (!req.body.text) {
    res.status(400);
    throw new Error("Textarea can not be blank!");
  }
  try {
    const message = await Messages.create({
      text: req.body.text,
      id: req.user.id,
      name: req.user.name,
    });

    if (message) {
      res.status(200).json("Successfully post your message");
    } else {
      res.status(400);
      throw new Error("please add text");
    }
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
    next(err);
  }
});

module.exports = router;
