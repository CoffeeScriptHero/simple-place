const router = require("./main");
const PostModel = require("../models/PostModel");
const CommentModel = require("../models/CommentModel").commentModel;
const asyncMiddleware = require("../middlewares/asyncMiddleware");
const UserModel = require("../models/UserModel");
const { v1: uuidv1 } = require("uuid");
const { cloudinary } = require("../utils/cloudinary");

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
const CLOUDINARY_POSTS_PRESET = process.env.CLOUDINARY_POSTS_PRESET;

router.post(
  "/add-post",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { description, userId, imageFile } = req.body.data;

      const postId = uuidv1().slice(0, 8);
      const base64EncodedImage = imageFile.data_url;

      const uploadedResponse = await cloudinary.uploader.upload(
        base64EncodedImage,
        {
          upload_preset: CLOUDINARY_POSTS_PRESET,
          public_id: postId,
        }
      );

      await PostModel.create({
        id: postId,
        description: description,
        userId: userId,
        comments: [],
        likes: [],
        image: uploadedResponse.url,
      });

      res.status(200).json({
        message: "allowed",
        id: postId,
        description: description,
        userId: userId,
        comments: comments,
        likes: likes,
        image: uploadedResponse.url,
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
  "/update-likes",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { id, likes, type } = req.body;

      if (id) {
        if (type === "comment") {
          await CommentModel.updateOne({ _id: id }, { $set: { likes } });

          await PostModel.updateOne(
            { "comments._id": id },
            { $set: { "comments.$.likes": likes } }
          );
        }

        if (type === "post") {
          await PostModel.updateOne({ id }, { $set: { likes } });
        }

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
      const { id, type } = req.body;

      if (id) {
        let usersList;

        if (type === "comment") {
          const comment = await CommentModel.findOne({ _id: id, type });

          usersList = await UserModel.find({
            id: { $in: comment.likes },
          });
        }

        if (type === "post") {
          const post = await PostModel.findOne({ id });

          usersList = await UserModel.find({ id: { $in: post.likes } });
        }

        const users = usersList.map((u) => ({
          username: u.username,
          profileImg: u.profileImg,
          id: u.id,
        }));

        res.status(200).json({ message: "allowed", liked: users });
      }
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
          {
            $push: {
              comments: comment,
            },
          }
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

router.post(
  "/remove-comment",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { postId, commentId, comments } = req.body;

      if (postId && commentId && comments) {
        const updatedComments = comments.filter((c) => c._id !== commentId);

        await PostModel.updateOne(
          { id: postId },
          { $set: { comments: updatedComments } }
        );

        await CommentModel.deleteOne({ _id: commentId });

        res.status(200).json({ comments: updatedComments });
      } else {
        res.sendStatus(400);
      }
    } catch {
      res.sendStatus(500);
    }
  })
);

module.exports = router;
