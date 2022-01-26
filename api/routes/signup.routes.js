const router = require("./main");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const asyncMiddleware = require("../middlewares/asyncMiddleware");
const { v1: uuidv1 } = require("uuid");

router.post(
  "/api/signup",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { username, password } = req.body.data;
      const user = await UserModel.findOne({ username }).exec();

      if (user) {
        return res
          .status(400)
          .json({ message: "User with this nickname already exists" });
      }

      const hashPassword = bcrypt.hashSync(password, 10);
      const id = uuidv1();
      await UserModel.create({ username, password: hashPassword, id });
      res.status(200).json({ message: "allowed", id: id });
    } catch {
      res.status(500).json({ message: "Unexpected error. Try again" });
    }
  })
);

router.post(
  "/api/login",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { username, password } = req.body.data;
      const user = await UserModel.findOne({ username }).exec();
      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          return res.status(200).json({ message: "allowed", id: user.id });
        }
        res.status(400).json({ message: "Wrong password. Try again" });
      } else {
        res.status(500).json({
          message: "User with this nickname does not exist",
        });
      }
    } catch {
      res.status(500).send({ message: "Unexpected error. Try again" });
    }
  })
);

module.exports = router;
