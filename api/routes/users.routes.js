const router = require("./main");
const UserModel = require("../models/UserModel");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.post(
  "/get-recommended-users",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id } = req.body;
      const mainUserFollowersIds = (await UserModel.findOne({ id })).followers;
      const notFollowers = await UserModel.find({
        id: { $nin: [...mainUserFollowersIds, id] },
      });
      let suggestedUsers = [];

      if (notFollowers.length > 14) {
        for (let u = 0; u < 14; u++) {
          suggestedUsers.push(notFollowers[u]);
        }
      } else {
        suggestedUsers = [...notFollowers];
      }

      res.status(200).json({ message: "allowed", users: suggestedUsers });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/get-followers",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { username } = req.body;
      const user = await UserModel.findOne({ username: username }).exec();

      const followersDataList = await UserModel.find({
        id: { $in: user.followers },
      }).exec();

      const followers = followersDataList.map((s) => ({
        username: s.username,
        profileImg: s.profileImg,
        id: s.id,
      }));

      res.status(200).json({ message: "allowed", followers: followers });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/get-following",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { username } = req.body;
      const user = await UserModel.findOne({ username: username }).exec();

      const followingDataList = await UserModel.find({
        id: { $in: user.following },
      }).exec();

      const following = followingDataList.map((s) => ({
        username: s.username,
        profileImg: s.profileImg,
        id: s.id,
      }));

      res.status(200).json({ message: "allowed", following: following });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/get-matched-users",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { usernameChunk } = req.body;

      let regex;
      try {
        if (usernameChunk.length) {
          regex = usernameChunk === "." ? "/" : new RegExp(usernameChunk, "i");
        } else {
          regex = "/";
        }
      } catch {
        console.log(regex);
      }

      const matchedUsers = await UserModel.find({
        username: { $regex: regex ? regex : "/" },
      });

      const matchedUsersList = matchedUsers.map((u) => ({
        profileImg: u.profileImg,
        username: u.username,
      }));

      res
        .status(200)
        .json({ status: 200, message: "allowed", users: matchedUsersList });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

module.exports = router;
