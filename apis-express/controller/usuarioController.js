
//IIFE's => função auto executavel que isola o escopo
(function(usuarioController){

    //Se não colocar o index ele já subentende
    //que tem que chamar um index.js
    var data = require('../data/usuario');

    usuarioController.init = function(app) {

        app.get('/', function(req, res) {
            
            data.getAll(function(err, results) {
                if(err)
                    console.log(err);
                else
                    res.send(results);
            });
        });

        //No Post precisamos fazer o parse dos objetos vindo do request
        //para isso usamos o pacote body-parser
        app.post('/', function(req, res) {

            //Post é sempre pelo body
            var usuarioInsert = req.body;

            data.create(usuarioInsert, function(err, usuario){
                if (err){
                    res.status(500);
                    res.send(err);
                } else {
                    res.status(201); //201 => statusCode: created
                    res.send(usuario);
                }
            });
        });
    };

})(module.exports);
