const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadHandler");
const User = require("../db/users");

router.get("/:username", authenticateToken, async (req, res, next) => {
  // username is for a user you are visiting
  const username = req.params.username;
  let data;
  let followersData;
  try {
    data = await User.findOne({ username: username }).select(
      "-password -following -followers"
    );
    if (!data) throw new Error("Could not get specified User");
    const { followers } = await User.findOne({ username: username }).select(
      "followers"
    );
    followersData = followers;
  } catch (err) {
    next(err);
  }
  const authFollow = followersData.includes(req.user.username);
  const sameUser = req.user.username === username;
  res.json({ data, authFollow: authFollow, sameUser: sameUser });
});

router.post(
  "/profile_pic_edit",
  authenticateToken,
  upload.single("image"),
  async (req, res, next) => {
    try {
      await User.updateOne(
        { _id: req.user._id },
        { $set: { profilePic: req.file.location } }
      );
      res.status(200).json("Upload Successful!");
    } catch (err) {
      next(err);
    }
  }
);

router.get("/profile_pic_edit", authenticateToken, (req, res, next) => {
  try {
    res.json(req.user.profilePic);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/cover_pic_edit",
  authenticateToken,
  upload.single("image"),
  async (req, res, next) => {
    try {
      await User.updateOne(
        { _id: req.user._id },
        { $set: { coverPic: req.file.location } }
      );
      res.status(200).json("Upload Successful!");
    } catch (err) {
      next(err);
    }
  }
);

router.get("/cover_pic_edit", authenticateToken, (req, res, next) => {
  try {
    res.json(req.user.coverPic);
  } catch (err) {
    next(err);
  }
});

router.post("/info_edit", authenticateToken, async (req, res, next) => {
  const { username, name, date, bio } = req.body;
  const onlyDate = date.split("T")[0];
  try {
    await User.updateOne(
      { _id: req.user._id },
      {
        $set: {
          username: username,
          name: name,
          date: onlyDate,
          bio: bio,
        },
      },
      {
        multi: true,
      }
    );
    res.status(200).json("Upload Successful!");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
