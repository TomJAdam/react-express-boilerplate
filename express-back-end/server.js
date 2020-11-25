require("dotenv").config();
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const cookieSession = require('cookie-session');
const PORT = 8080;

// PG database client / connection setup
const { Pool } = require("pg");
const dbParams = require("./knexfile.js");
const db = new Pool(dbParams.development.connection);
db.connect();
const helpers = require('./src/helpers/dbhelper')(db);
App.use(cors({ origin: true, credentials: true }));


//Cookie-session
App.use(cookieSession({
  name: 'session',
  keys: ['key1'],
  maxAge: 12 * 60 * 60 * 1000 // 12 hours
}))

// Socket IO
const server = http.createServer(App);
const io = socketio(server);

io.on('connection', (socket) => {

  let room;
  console.log('We have a new connection!');

  socket.on('join', ({ conv_id }, callback) => {

    console.log('at the server', conv_id);

    room = conv_id;

    socket.join(conv_id);
    // console.log(socket);
  
  })


  socket.on('sendMessage', (message, user, callback) => {
    console.log('text', message);
    console.log('this is the user', user.id);
    console.log('this is the room', room);
    db.query(
      `INSERT INTO messages (conversation_id, sender_id, text)
      VALUES (${room}, ${user.id}, '${message}')
      RETURNING *;`)
    .then(() => {
      
    })
    io.to(room).emit('message', { text: message });
    callback();
  })


  socket.on('disconnect', () => {
    console.log('Disconnected')
  })
})



// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
// Import Routers
const gigs = require("./src/routes/gigs");
const users = require("./src/routes/users");
const categories = require("./src/routes/categories");
const conversations = require("./src/routes/conversations");
const messages = require("./src/routes/messages");
const validation = require("./src/routes/validation");


// API Router
App.use("/api", gigs(db));
App.use("/api", users(db));
App.use("/api", categories(db));
App.use("/api", conversations(db));
App.use("/api", messages(db));
// App.use("/api", messages(db));
App.use("/", validation(helpers));

// Port Listening
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
