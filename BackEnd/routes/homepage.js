const express = require("express");
const router = express.Router();
const Messages = require("../db/messageModel");
const authenticateToken = require("../middleware/authMiddleware");
// const UserNotification = require('../db/userNotification');
const Notifications = require('../db/notificationModel');
const jwt = require("jsonwebtoken");

//get all posts to create feed
router.get("/", authenticateToken, async (req, res, next) => {
  try {
    const message = await Messages.find().sort({x:1}).limit(50);
    // check if password is matched
    if (message) {
      res.status(200).json(message.reverse());
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

// get your own username
router.get("/username", authenticateToken, async (req, res) => {
  const { username } = req.user;
  res.status(200).json({ username: username });
});

//create post
router.post("/", authenticateToken, async (req, res, next) => {
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

// /**
//  * Delete a post
//  *
//  * @param req.body: messageId, username
//  */
// router.delete("/:messageId", authenticateToken, (req, res, next) => {
//   const { username } = req.body;}
  
//get all posts to create feed
router.get("/noti", authenticateToken, async (req, res, next) => {
  try {
    const userID = req.user._id
    console.log(userID)

    const notification = await Notifications.find({
      recievername:{$in:["all","req.user.name"]},
      read_by:{$nin:[userID]}});
    // check if password is matched
    if (notification) {
      res.status(200).json(notification)
      for (const n of notification) {
        const updateResult = await Notifications.updateOne(
          { _id: n._id },
          { $addToSet: { read_by: userID } }
        )
        console.log(`Updated notification ${n._id}: ${updateResult}`)}
        

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
