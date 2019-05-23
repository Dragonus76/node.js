var http = require ('http');

var server = http.createServer(function(req, res){

    res.writeHead(200);
    res.end('salut tous le monde');
});

server.on('close', function(){ // On ecoute l'evenement close 
    console.log('Bye, bye');

})
server.listen(7000);//Démarre le serveur

server.close();// Arréte le serveur. Déclenche l'événement close 

var EventEmitter =  require('events').EventEmitter;

var jeu =  new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);

});

jeu.emit('gameover', 'Vous avez perdu !');
jeu.emit('nouveau joueur','Mario', 35);