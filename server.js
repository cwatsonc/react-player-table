const io              = require('socket.io');
const express         = require('express');
const http            = require('http');
const app             = express();
const server          = http.createServer(app);

app.use(express.static('public'));

app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

server.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + server.address().port);
});


let nextId = 0;
let nConnections = 0;

    var sio = io(server);


        //Socket.io will call this function when a client connects,
        //So we can send that client looking for a game to play,
        //as well as give that client a unique ID to use so we can
        //maintain the list if players.
    sio.on('connection', function (client) {
            //tell the player they connected, giving them their id
      client.userid = nextId++;
      ++nConnections;
        client.emit('onconnected', { id: client.userid} );
      console.log('new connection', client.userid, nConnections, 'total');
      
        client.on('chat message', function(msg) {
            sio.emit('chat message', msg);
        }); //client.on message

            //When this client disconnects, we want to tell the game server
            //about that as well, so it can remove them from the game they are
            //in, and make sure the other player knows that they left and so on.
        client.on('disconnect', function () {

                //Useful to know when soomeone disconnects
            console.log('\t socket.io:: client disconnected', client.userid);
          --nConnections;
          console.log(nConnections, 'total');
            
        }); //client.on disconnect
     
    }); //sio.sockets.on connection
