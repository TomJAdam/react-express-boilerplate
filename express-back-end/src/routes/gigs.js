const router = require("express").Router();



router.get("/gigs", (req, res) =>
  res.json({
    message: "Gigs to come!",
  })
);



module.exports = router;
