var express = require("express");
var router = express.Router();

/* GET add user page. */
router.get("/", function (req, res, next) {
  let payLoad = req.query.message;
  res.render("signin", { message: payLoad });
});

module.exports = router;
