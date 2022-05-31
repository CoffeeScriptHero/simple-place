const router = require("./main");
const UserModel = require("../models/UserModel");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.post(
  "/get-all-users",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id } = req.body;
      const users = await UserModel.find({ id: { $ne: id } }).exec();

      if (users) {
        res.status(200).json({ message: "allowed", users: users });
      } else {
        res.status(400).send({ message: "no such user" });
      }
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
      const matchedUsers = await UserModel.findAll({
        username: { $regex: usernameChunk },
      });

      console.log(usernameChunk, matchedUsers);

      res
        .status(200)
        .json({ status: 200, message: "allowed", users: matchedUsers });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

module.exports = router;
