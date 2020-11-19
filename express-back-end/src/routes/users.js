const router = require("express").Router();



router.get("/users", (req, res) =>
  res.json({
    message: "Users to come!",
  })
);


module.exports = router;

