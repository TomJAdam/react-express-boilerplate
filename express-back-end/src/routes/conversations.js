const router = require("express").Router();

module.exports = (db) => {

  router.get('/conversations', (req, res) => {
    db.query(`SELECT * FROM conversations`).then((data) => {
      console.log(data.rows);
    })
  })

  router.put('/conversation', (req, res) => { 

  })


  return router;
}