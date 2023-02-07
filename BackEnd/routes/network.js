const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const User = require("../db/users");

module.exports = router;

/**
 * Action 1. If user A follow user B, add user B to the following of A,
 * and add user A to the followers of B.
 *
 * Action 2. If user A unfollow user B, delete user B in the following of A,
 * and delete user A to the followers of B.
 *
 * @param req.user
 * @param username : user B (req.body)
 * @param follow: boolean (true: follow, false: unfollow)
 */

router.post("/follow", authenticateToken, async (req, res, next) => {
  try {
    const { username } = req.user;
    const targetPerson = req.body.username;
    const follow = req.body.follow;
    const a = await User.findOne({ username: username });
    const alreadyFollowing = a.following.includes(targetPerson);
    console.log(alreadyFollowing);
    if (follow) {
      if (alreadyFollowing) throw new Error("You already follow this user");
      await User.findOneAndUpdate(
        { username: username },
        {
          $push: {
            following: targetPerson,
          },
        }
      );

      await User.findOneAndUpdate(
        { username: targetPerson },
        {
          $push: {
            followers: username,
          },
        }
      );
      res.json("Following this user");
    } else if (!follow) {
      if (!alreadyFollowing)
        throw new Error(
          "You can not unfollow this user because you do not follow this user!"
        );
      await User.findOneAndUpdate(
        { username: username },
        {
          $pull: {
            following: targetPerson,
          },
        }
      );

      await User.findOneAndUpdate(
        { username: targetPerson },
        {
          $pull: {
            followers: username,
          },
        }
      );
      res.json("Successfully unfollow this user");
    }
  } catch (err) {
    next(err);
  }
});
