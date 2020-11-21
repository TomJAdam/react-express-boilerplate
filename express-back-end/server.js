require('dotenv').config();
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// PG database client / connection setup
const { Pool } = require("pg");
const dbParams = require("./knexfile.js");
const db = new Pool(dbParams.development.connection);
db.connect(() => console.log('connected to the db'));


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
// Import Routers
const gigs = require("./src/routes/gigs");
const users = require("./src/routes/users");
const categories = require("./src/routes/categories");
const validation = require("./src/routes/validation");

// API Router
App.use("/api", gigs);
App.use("/api", users(db));
App.use("/api", categories(db));
App.use("/", validation);

// Port Listening
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
