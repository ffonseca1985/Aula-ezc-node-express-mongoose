

var express = require('express');
var usuarioController = require('./controller');

//estamos pegando uma instancia do express
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//como o require mantem o objeto em cache
//se conectarmos aqui.. todo objeto que se refere ao 
//mongoose já terá a conexão aberta
mongoose.connect("mongodb://localhost:27017/ezconetDb");

mongoose.connection.on('open', function() {
    console.log('mongoose conectado');
});

var router = express.Router();

//criando um middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/v1', router);
usuarioController.init(router);

//Podemos usar eventos, basta analisar se o retorno
//é um eventEmitter

// var event = app.listen(300);
// event.on('listening', function(){

// });

//usando callback

var porta = process.env.PORT || 3000;

app.listen(porta, function(){
    console.log('server iniciado..');
});
