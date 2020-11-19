const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/gigs", (req, res) =>
  res.json({
    message: "Gigs to come!",
  })
);
