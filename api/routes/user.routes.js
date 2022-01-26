const router = require("./main");
const UserModel = require("../models/UserModel");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.post(
  "/api/check-user",
  asyncMiddleware(async (req, res, next) => {
    try {
      const { username, id } = req.body.data;
      const user = await UserModel.findOne({ username, id }).exec();

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

module.exports = router;
