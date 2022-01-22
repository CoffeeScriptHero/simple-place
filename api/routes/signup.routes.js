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
        return res.status(400).json({ message: "exist" });
      }

      const hashPassword = bcrypt.hashSync(password, 10);
      const id = uuidv1();
      await UserModel.create({ username, password: hashPassword, id });
      res.status(200).json({ message: "allowed" });
    } catch {
      res.status(500).json({ message: "catched" });
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
          return res.status(200).json({ message: "allowed" });
        }
        res.status(400).json({ message: "wrong password" });
      } else {
        res.status(500).json({
          message: "no user",
        });
      }
    } catch {
      res.status(500).send({ message: "catched" });
    }
  })
);

module.exports = router;
