const router = require("./main");
const UserModel = require("../models/UserModel");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.post(
  "/check-user",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id } = req.body.data;
      const user = await UserModel.findOne({ id }).exec();

      if (user) {
        res.status(200).send({ message: "allowed" });
      } else {
        res.status(500).send({ message: "denied" });
      }
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/get-user-data",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id } = req.body.data;
      const user = await UserModel.findOne({ id }).exec();

      if (user) {
        res.json({
          message: "account exist",
          username: user.username,
          profileImg: user.profileImg,
          subscriptions: user.subscriptions,
          subscribers: user.subscribers,
          posts: user.posts,
        });
      } else {
        res.status(500).send({ message: "denied" });
      }
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/get-userpage",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { username } = req.body.data;
      const user = await UserModel.findOne({ username }).exec();

      if (user) {
        res.json({
          status: 200,
          username: user.username,
          profileImg: user.profileImg,
          subscriptions: user.subscriptions,
          subscribers: user.subscribers,
          posts: user.posts,
        });
      } else {
        res.status(500).send({ message: "no account" });
      }
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/get-all-users",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id } = req.body.data;
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

module.exports = router;
