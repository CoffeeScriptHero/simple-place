const router = require("./main");
const asyncMiddleware = require("../middlewares/asyncMiddleware");

router.post(
  "/api/request",
  asyncMiddleware(async (req, res, next) => {
    const fieldsNumber = Object.keys(req.body.data).length;

    const { login, password, passwordConfirmation } = req.body.data;
    switch (
      (login, password, passwordConfirmation)
      // case (!login &&)
    ) {
    }
  })
);

module.exports = router;
