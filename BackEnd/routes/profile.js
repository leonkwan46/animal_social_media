const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadHandler");
const User = require("../db/users");

router.get("/", authenticateToken, (req, res, next) => {
  try {
    const data = {
      username: req.user.username,
      name: req.user.name,
      bio: req.user.bio,
      date: req.user.date,
      profilePic: req.user.profilePic,
      coverPic: req.user.coverPic,
    };
    res.json({ data });
  } catch (err) {
    next({ message: "Failed sending Data" });
  }
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
          bio: bio
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
