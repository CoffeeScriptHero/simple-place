const router = require("./main");
const PostModel = require("../models/PostModel");
const CommentModel = require("../models/CommentModel").commentModel;
const asyncMiddleware = require("../middlewares/asyncMiddleware");
const UserModel = require("../models/UserModel");

router.post(
  "/add-post",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id, description, userId, comments, likes, image } = req.body.data;
      await PostModel.create({
        id: id,
        description: description,
        userId: userId,
        comments: comments,
        likes: likes,
        image: image,
      });

      res.status(200).json({
        message: "allowed",
        id: id,
        description: description,
        userId: userId,
        comments: comments,
        likes: likes,
        image: image,
      });
    } catch {
      res.status(500).json({ message: "unexpected error" });
    }
  })
);

router.get(
  "/get-all-posts",
  asyncMiddleware(async (req, res, next) => {
    const posts = await PostModel.find({}).exec();

    if (posts) {
      res.status(200).json({ message: "allowed", posts });
    } else {
      res.status(400).json({ message: "no posts" });
    }
  })
);

router.post(
  "/get-user-posts",
  asyncMiddleware(async (req, res, next) => {
    const { id } = req.body;
    const posts = await PostModel.find({ userId: id });
    if (posts) {
      res.status(200).json({ message: "allowed", posts });
    } else {
      res.status(400).json({ message: "no posts" });
    }
  })
);

router.post(
  "/get-post",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id } = req.body;
      const post = await PostModel.findOne({ id: id });
      if (post) {
        res.status(200).json({ post });
      } else {
        res.status(400).json({ message: "no posts" });
      }
    } catch {
      res.status(500).json({ message: "error" });
    }
  })
);

router.post(
  "/update-comment-likes",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { commentId, likes } = req.body;

      if (commentId) {
        await PostModel.updateOne(
          { "comments._id": commentId },
          { $set: { "comments.$.likes": likes } }
        );
        res.status(200).json({ message: "allowed" });
      } else {
        res.status(400).json({ message: "no post" });
      }
    } catch {
      res.status(500).json({ message: "error" });
    }
  })
);

router.post(
  "/get-liked",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { postId, username } = req.body;

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
  "/create-comment",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { postId, userId, text } = req.body;

      const user = await UserModel.findOne({ id: userId }).exec();

      if (user) {
        const comment = await CommentModel.create({
          userId,
          text,
          username: user.username,
          profileImg: user.profileImg,
          likes: [],
        });
        await PostModel.updateOne(
          { id: postId },
          { $push: { comments: comment } }
        );
        const post = await PostModel.findOne({ id: postId }).exec();
        res.status(200).json({ comments: post.comments });
      } else {
        res.sendStatus(400);
      }
    } catch {
      res.sendStatus(500);
    }
  })
);

module.exports = router;
