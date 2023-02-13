const express = require("express");
const router = express.Router();
const Messages = require("../db/messageModel");
const authenticateToken = require("../middleware/authMiddleware");

//get all posts to create feed
router.get("/", authenticateToken, async (req, res, next) => {
  try {
    const message = await Messages.find();
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

/**
 * Delete a post
 *
 * @param req.body: messageId, username
 */
router.delete("/:messageId", authenticateToken, (req, res, next) => {
  const { username } = req.body;
});

module.exports = router;
