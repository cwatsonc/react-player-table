// server.js

// init project
const
        io              = require('socket.io'),
        express         = require('express'),
        http            = require('http'),
        app             = express(),
        server          = http.createServer(app);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

// listen for requests :)
server.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + server.address().port);
});

    var sio = io.listen(server);

        //Configure the socket.io connection settings.
        //See http://socket.io/
    sio.configure(function (){

        sio.set('log level', 0);

        sio.set('authorization', function (handshakeData, callback) {
          callback(null, true); // error first callback style
        });

    });


        //Socket.io will call this function when a client connects,
        //So we can send that client looking for a game to play,
        //as well as give that client a unique ID to use so we can
        //maintain the list if players.
    sio.sockets.on('connection', function (client) {
            //tell the player they connected, giving them their id
        client.emit('onconnected', { id: client.userid } );
      
            //Now we want to handle some of the messages that clients will send.
            //They send messages here, and we send them to the game_server to handle.
        client.on('message', function(m) {

            // game_server.onMessage(client, m);

        }); //client.on message

            //When this client disconnects, we want to tell the game server
            //about that as well, so it can remove them from the game they are
            //in, and make sure the other player knows that they left and so on.
        client.on('disconnect', function () {

                //Useful to know when soomeone disconnects
            console.log('\t socket.io:: client disconnected ' + client.userid + ' ' + client.game_id);
            
        }); //client.on disconnect
     
    }); //sio.sockets.on connection
