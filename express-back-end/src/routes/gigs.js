const router = require("express").Router();



router.get("/gigs", (req, res) =>
  res.json({
    message: "Gigs to come!",
  })
);


router.put("/gigs/", (req, res) => {
  res.json({
    message: "New gig has been created!"
  })
})

router.delete("/gigs/:id", (req, res) => {
  res.json({
    message: `gigs#${req.params.id} is removed`
  })
})


module.exports = router;
