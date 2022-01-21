const router = require("./main");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const asyncMiddleware = require("../middlewares/asyncMiddleware");
const { v1: uuidv1 } = require("uuid");

router.post(
  "/api/request",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { username, password, passwordConfirmation } = req.body.data;
      const fieldsNumber = Object.keys(req.body.data).length;

      if (fieldsNumber === 2) {
        console.log(true);
        const user = await UserModel.findOne({ username, password }).exec();
        if (user) {
          res.status(200).json({ message: "logined" });
        } else {
          res
            .status(500)
            .json({ message: "password or nickaname is not correct" });
        }
      } else if (fieldsNumber === 3) {
        const user = await UserModel.findOne({ username }).exec();
        if (user) {
          return res.status(400).json({ message: "that user already exist" });
        }

        const hashPassword = bcrypt.hashSync(password, 10);
        const id = uuidv1();
        console.log(hashPassword, id);
        await UserModel.create({ username, password: hashPassword, id });
        return res.status(200).json({ message: "registred" });
      }
    } catch {
      return res.status(400).json({ message: "catched" });
    }
  })
);

module.exports = router;
