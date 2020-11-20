const router = require("express").Router();

router.put("/signup", (req, res) =>
  res.json({
    message: "Routes to register!",
  })
);

router.post("/login", (req, res) =>
  res.json({
    message: "Routes to login!",
  })
);

module.exports = router;
