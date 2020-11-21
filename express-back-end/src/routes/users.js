const router = require("express").Router();

router.get("/users", (req, res) =>
  res.json({
    message: "Routes to get Users!",
  })
);

router.put("/users", (req, res) =>
  res.json({
    message: "Route to create a new user!",
  })
);

module.exports = router;
