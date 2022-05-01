const router = require("./main");
const PostModel = require("../models/PostModel");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

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
    const posts = await PostModel.find({});
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
        res.status(200).json({ message: "allowed", post: post });
      } else {
        res.status(400).json({ message: "no posts" });
      }
    } catch {
      res.status(500).json({ message: "error" });
    }
  })
);

module.exports = router;
