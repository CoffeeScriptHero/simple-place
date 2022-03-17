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
      console.log(user);

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

module.exports = router;
