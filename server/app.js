var static = require('node-static'),
	http = require('http'),
	util = require('util'),
	url = require('url'),
	fs = require('fs');

// create static server for decks
var fileServer = new static.Server('./app');

var server = http.createServer(function (req, res) {
    fileServer.serve(req, res, function (err, res2) {
        if (err) { // An error as occured
            console.error("> Error serving " + req.url + " - " + err.message);
            res.writeHead(err.status, err.headers);
            res.end();
        } else { // The file was served successfully
            console.log("> " + req.url + " - " + res2.message);
        }
    });
}).listen(8080, function() {
    console.log('Listening at: http://localhost:8080');
});


var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){

	socket.on('message', function(message){
		socket.broadcast.emit('message', message);
	});

	socket.on('key down', function(data){
		socket.broadcast.emit('key down', data);
	});

	socket.on('key up', function(data){
		socket.broadcast.emit('key up', data);
	});

	socket.on('flowtime minimap complete', function(data){
		socket.broadcast.emit('flowtime minimap complete', data);
	});

	socket.on('navigate', function(data){
		socket.broadcast.emit('navigate', data);
	});

	socket.on('disconnect', function(){
		console.log("Connection " + socket.id + " terminated.");
	});

});
