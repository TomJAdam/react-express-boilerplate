const router = require("express").Router();

module.exports = (db) => {
  router.get('/gigs/category/:category_id', (req, res) => {
    console.log('at the api')
    const query = 
    `
    SELECT * FROM gigs
    WHERE category_id = ${req.params.category_id}
    `
    db.query(query)
    .then(data => {
      res.json(data.rows);
    })
  });

  router.get('/gigs/:gig_id', (req, res) => {
    db.query(`SELECT * from`)
  })
  
  router.get("/gigs", (req, res) =>
    db.query(`SELECT * FROM gigs;`).then(({ rows: gigs }) => {
      res.json(gigs);
    })
  );


  // router.get('/gigs/:category/:id', (req, res) => {
  //   db.query(`SELECT * FROM gigs WHERE id = ${req.params.id}`)
  // });





  router.put("/gigs/", (req, res) => {
    res.json({
      message: "New gig has been created!",
    });
  });

  router.delete("/gigs/:id", (req, res) => {
    res.json({
      message: `gigs#${req.params.id} is removed`,
    });
  });

  return router;

}






