const router = require("express").Router();


router.get("/categories", (req, res) =>
  res.json({
    message: "Route to get all categories!",
  })
);