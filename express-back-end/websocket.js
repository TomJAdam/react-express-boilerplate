const http = require('http');
const socket = require('socket.io');
export default webSocket = (app) => {
  const server = http.createServer(app);
  const io = socket(server);

  io.on('connection', () => )
}