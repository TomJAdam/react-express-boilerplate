const router = require("express").Router();

router.get("/users", (req, res) =>
  res.json({
    message: "Routes to get Users!",
  })
);

router.put("/users", (req, res) => {
  res.json({
    message: "Route to create a new user!",
  });
  const user = req.body;

  const queryParams = [
    user.first_name,
    user.last_name,
    user.email,
    user.password,
    user.phone,
    user.address,
    user.city,
    user.province,
    user.phone,
    user,
  ];
  db.query(
    `
    INSERT INTO users (first_name, last_name, email, password, phone, address, city, province, phone_number, avatar_img, bio, education)
    `,
    (err, res)
  );
});

module.exports = router;
