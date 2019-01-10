
var express = require('express');

//estamos instanciando um host para o express
var app = express();

var porta = process.env.PORT || 3000;

app.get('/', function(req, resp) {
    console.log('veio o request');
    resp.send('Olá mundo!!!!');
});

app.listen(porta, function(){
    console.log('escutando a porta');
});