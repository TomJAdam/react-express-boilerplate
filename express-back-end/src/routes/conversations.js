const router = require("express").Router();

module.exports = (db) => {

  router.get('/conversations', (req, res) => {
    db.query(`SELECT * FROM conversations`).then((data) => {
      console.log(data.rows);
      res.json(data.rows);
    })
  })

  router.put('/conversations', (req, res) => {
    const { client_id, contractor_id } = req.body;
    console.log('in the put', client_id);
    db.query(
      `INSERT INTO conversations (client_id, contractor_id) 
       VALUES (${client_id}, ${contractor_id})
       RETURNING *;`)
    .then(data => {
      res.send(data.rows[0])
    })

  })


  return router;
}