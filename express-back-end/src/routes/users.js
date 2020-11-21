const { query } = require("express");

const router = require("express").Router();

module.exports = (db) => {
  router.get("/users", (req, res) =>
    res.json({
      message: "Routes to get Users!",
    })
  );

  router.put("/users", (req, res) => {
    const user = req.body;
    console.log("user :", user);

    const queryParams = [
      user.first_name,
      user.last_name,
      user.email,
      user.password,
      user.phone,
      user.address,
      user.city,
      user.province,
      user.avatar,
      user.bio,
      user.education,
    ];

    return db
      .query(
        `
      INSERT INTO users (first_name, last_name, email, password, phone, address, city, province, avatar_img, bio, education)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *;
      `,
        queryParams
      )
      .then((res) => {
        console.log("res :", res);
        return res;
      })
      .catch(console.log);
  });
  return router;
};
