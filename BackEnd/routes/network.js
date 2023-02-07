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
    const { username } = req.user; // yourself
    const targetPerson = req.body.username; //
    const follow = req.body.follow;
    const you = await User.findOne({ username: username });
    const alreadyFollowing = you.following.includes(targetPerson);
    if (follow) {
      if (alreadyFollowing) throw new Error("You already follow this user");
      await User.findOneAndUpdate(
        { username: username },
        {
          $push: {
            following: targetPerson,
          },
          $inc: {
            numOfFollowing: 1,
          },
        }
      );

      await User.findOneAndUpdate(
        { username: targetPerson },
        {
          $push: {
            followers: username,
          },
          $inc: {
            numOfFollowers: 1,
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
          $inc: {
            numOfFollowing: -1,
          },
        }
      );

      await User.findOneAndUpdate(
        { username: targetPerson },
        {
          $pull: {
            followers: username,
          },
          $inc: {
            numOfFollowers: -1,
          },
        }
      );
      res.json("Successfully unfollow this user");
    }
  } catch (err) {
    next(err);
  }
});

/**
 * Get followers of a user
 * @param req.params: target user
 */
router.get(
  "/following/:username",
  authenticateToken,
  async (req, res, next) => {
    try {
      const username = req.params.username;
      const { following } = await User.findOne({ username: username }).select(
        "following"
      );
      if (!following) throw new Error("Could not get the following");
      const followingDetails = [];
      for (const followingUser of following) {
        const user = await User.findOne({ username: followingUser }).select(
          "username name bio profilePic"
        );
        followingDetails.push(user);
      }
      console.log(followingDetails);
      res.json(followingDetails);
    } catch (err) {
      next(err);
    }
  }
);

/**
 * Get followers of a user
 * @param req.params: target user
 */
router.get(
  "/followers/:username",
  authenticateToken,
  async (req, res, next) => {
    try {
      const username = req.params.username;
      const { followers } = await User.findOne({ username: username }).select(
        "followers"
      );
      if (!followers) throw new Error("Could not get the followers");
      const followersDetails = [];
      for (const follower of followers) {
        const user = await User.findOne({ username: follower }).select(
          "username name bio profilePic"
        );
        followersDetails.push(user);
      }
      console.log(followersDetails);
      res.json(followersDetails);
    } catch (err) {
      next(err);
    }
  }
);
