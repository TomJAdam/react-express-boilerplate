const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.get("/api/users", (req, res) =>
  res.json({
    message: "Users to come!",
  })
);
