const router = require("./main");
const UserModel = require("../models/UserModel");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.post(
  "/check-main-user",
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

// router.post(
//   "/check-user-exist",
//   asyncMiddleware(async (req, res, next) => {
//     try {
//       const { username } = req.body;

//       const user = await UserModel.findOne({ username }).exec();

//       if (user) {
//         res.status(200).send({ message: "allowed" });
//       } else {
//         res.status(500).send({ message: "denied" });
//       }
//     } catch {
//       res.status(500).send({ message: "unexpected error" });
//     }
//   })
// );

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
          following: user.following,
          followers: user.followers,
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
          id: user.id,
          following: user.following,
          followers: user.followers,
          posts: user.posts,
        });
      } else {
        res.status(400).send({ status: 400, message: "no account" });
      }
    } catch {
      res.status(500).send({ status: 500, message: "unexpected error" });
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
  "/get-liked",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { users } = req.body;
      console.log(users);
      const usersList = await UserModel.find({ id: { $in: users } }).exec();

      // const users = usersList.map((u) => ({
      //   username: s.username,
      //   profileImg: s.profileImg,
      //   id: s.id,
      // }));
      console.log(usersList);

      res.status(200).json({ message: "allowed", following: following });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/follow-user",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { mainId, userId } = req.body;
      await UserModel.updateOne(
        { id: mainId },
        { $push: { following: userId } }
      );
      await UserModel.updateOne(
        { id: userId },
        { $push: { followers: mainId } }
      );
      res.status(200).send({ message: "success" });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/unfollow-user",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { mainId, userId } = req.body;
      await UserModel.updateOne(
        { id: mainId },
        { $pull: { following: userId } }
      );
      await UserModel.updateOne(
        { id: userId },
        { $pull: { followers: mainId } }
      );
      res.status(200).send({ message: "success" });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

router.post(
  "/delete-user",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { mainId, userId } = req.body;
      await UserModel.updateOne(
        { id: mainId },
        { $pull: { followers: userId } }
      );
      res.status(200).send({ message: "success" });
    } catch {
      res.status(500).send({ message: "unexpected error" });
    }
  })
);

module.exports = router;
