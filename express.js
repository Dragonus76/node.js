var express = require('express');
var app = express();

app.get('/', function(req,res){

    res.setHeader('Content-Type','text/plain');
    res.send('Vous êtes à l\'acceuil');



});

app.get('/sous-sol', function(req,res){

    res.setHeader('Content-Type','text/plain');
    res.send('Vous etes a la cave a vin, ces bouteilles sont a moi');



});
app.get('/etage/1/chambre', function(req,res){

    res.setHeader('Content-Type','text/plain');
    res.send('ici c\'est priver');



});
app.get('/etage/2/chambre', function(req,res){

    res.setHeader('Content-Type','text/plain');
    res.send('la cuisine');



});
app.get('/etage/3/chambre', function(req,res){

    res.setHeader('Content-Type','text/plain');
    res.send('salle a manger');



});

app.use(function(req, res, next){

    res.setHeader('Content-Type','text/plain');
    res.status(404).send('Page introuvable!');

});

app.get('/etage/:etagenum/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
});


app.get('/etage/:etagenum/chambre',function(req, res){
    res.render('chambre.ejs', {etage:req.params.etagenum});

});
app.listen(8000);