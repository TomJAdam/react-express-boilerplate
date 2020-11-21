const { response } = require("express");

const router = require("express").Router();


module.exports = (db) => {
  router.get('/categories', (req, res) => {
    db.query(`SELECT * FROM categories`)
    .then(data => {
      res.json(data.rows)
    })
  
  });

  return router;
}

