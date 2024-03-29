const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// import it because it contain script for async handler (easier to write code)
const asyncHandler = require("express-async-handler");
const User = require("../db/users");
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log("check1");
    // check if password is matched
    if (user && (await bcrypt.compare(password, user.password))) {
      jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        res.json({ token });
      });
    } else {
      res.status(400);
      throw new Error("Username or password incorrect");
    }
  } catch (err) {
    next(err);
  }
});

// Reset Password API
router.post("/reset-password", async(req, res, next) => {
  try{
    await User.updateOne({username: req.body.username}, { $set: {
      password: req.body.password
    }})
    res.status(200).json("Reset Successful!")
  } catch(err) {
    next(err)
  }
});

module.exports = router;
