const router = require("express").Router();



router.get("/users", (req, res) =>
  res.json({
    message: "Routes to get Users!",
  })
);


module.exports = router;

