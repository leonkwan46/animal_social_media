const express = require("express");
const router = express.Router();

const { welcomeEmail } = require("../mailer/sendEmail");
const User = require("../db/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Endpoint Can't do '/register'
// Do '/' instead, as this Endpoint is the home of this Endpoint

router.post("/", async (req, res, next) => {
  try {
    const { username, email, password, name, date } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const onlyDate = date.split("T")[0];
    const user = new User({
      username: username,
      email: email,
      password: hash,
      name: name,
      date: onlyDate,
      bio: "",
      verified: false,
    });

    const found = await User.findOne({ username });
    if (found) throw new Error("User already Exist");

    // Save user into DB
    user.save();

    // Send a welcome-verification email
    jwt.sign(
      { user: username },
      process.env.EMAIL_SECRET,
      { expiresIn: "15m" },
      (err, emailToken) => {
        if (err) throw new Error("Verification Email Crashed")
        const verifyURL = `http://localhost:5000/register/verification/${emailToken}`;
        welcomeEmail(email, username, verifyURL);
      }
    );

    // Send back the token to Client
    jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
      res.json({ token });
    });
  } catch (err) {
    next(err);
  }
});

router.get("/verification/:token", async (req, res, next) => {
  try {
    const username = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
    await User.updateOne(
      { username: username.user },
      { $set: { verified: true } }
    );
  } catch (err) {
    next(err);
  }

  return res.redirect("http://localhost:3000/login");
});

module.exports = router;
