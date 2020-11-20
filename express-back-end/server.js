const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// PG database client / connection setup
const { Pool } = require("pg");
const dbParams = require("./knexfile.js");
const db = new Pool(dbParams.development.connection);
db.connect();

db.query("SELECT * FROM users;", (error, response) => {
  console.log("error :", error);
  console.log("response :", response);
});

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
// Import Routers
const gigs = require("./src/routes/gigs");
const users = require("./src/routes/users");
const validation = require("./src/routes/validation");

// API Router
App.use("/api", gigs);
App.use("/api", users);
App.use("/", validation);

// Port Listening
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
