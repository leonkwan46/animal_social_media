const express = require("express");
const router = express.Router();
const Messages = require("../db/messageModel");
const protected = require("../middleware/authMiddleware");
// const UserNotification = require('../db/userNotification');
const Notifications = require('../db/notificationModel');
const jwt = require("jsonwebtoken");

//get all posts to create feed
router.get("/", protected, async (req, res, next) => {
  try {
    const message = await Messages.find();
    // check if password is matched
    if (message) {
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
    throw new Error("Text area can not be blank!");
  }
  try {
    const message = await Messages.create({
      text: req.body.text,
      id: req.user.id,
      name: req.user.name,
      username: req.user.username
    });

    if (message) {
      // res.status(200).json("Successfully post your message");
      res.status(200).json(message);
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

//get all posts to create feed
router.get("/noti", protected, async (req, res, next) => {
  try {
    // console.log(req.body.usertoken)
    // console.log(req.params.usertoken)
    // const decoded = jwt.verify(req.usertoken, process.env.ACCESS_TOKEN_SECRET);
    // const readerID = decoded.user._id
    const userID = req.user._id

    const notification = await Notifications.find({read_by:{$ne:userID}});
    // check if password is matched
    if (notification) {
      res.status(200).json(notification);
      // await Notifications.findAndModify({query:{read_by:{$ne:userID},update:{$push:{read_by:userID}}}});
      
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

module.exports = router;
