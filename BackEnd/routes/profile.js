const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

router.get("/", authenticateToken, (req, res, next) => {
  try {
    const data = {
      username: req.user.username,
      name: req.user.name,
      bio: req.user.bio,
      date: req.user.date,
    };
    res.json({ data });
  } catch (err) {
    next({ message: "Failed sending Data" });
  }
});

router.post("/profile_pic_edit", (req, res) => {
  console.log("====================================");
  console.log();
  console.log("====================================");
});

module.exports = router;
