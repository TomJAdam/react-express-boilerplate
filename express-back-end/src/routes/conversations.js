const router = require("express").Router();

module.exports = (db) => {

  router.get('/conversations', (req, res) => {
    db.query(`SELECT * FROM conversations`).then((data) => {
      res.json(data.rows);
    })
  })

  router.put('/conversations', (req, res) => {
    const { client_id, contractor_id } = req.body;
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