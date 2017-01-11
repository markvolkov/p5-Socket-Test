let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let router = express.Router();

app.use('/', express.static(__dirname + '/public'));
app.use('/', router);

router.get('/', function(req, res) {
  res.sendFile('index.html');
});

router.get('/line', function(req, res) {
  res.sendFile('line.html', {'root':'./public'});
});

io.on('connection', function(socket) {
  console.log("Connected to sockets");

  socket.on('mouseData', function(data) {
    console.log(data);
    socket.broadcast.emit('mouseData', data);
  });

});

http.listen(3000, function() {
  console.log("Server running on port " + 3000);
});
