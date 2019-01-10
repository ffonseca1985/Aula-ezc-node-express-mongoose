
//IIFE's => função auto executavel que isola o escopo
(function(usuarioController){

    //Se não colocar o index ele já subentende
    //que tem que chamar um index.js
    var data = require('../data');

    usuarioController.init = function(app) {

        app.get('/', function(req, res) {
            
            data.getAll(function(err, results) {
                if(err)
                    console.log(err);
                else
                    res.send(results);
            });
        });
    }

})(module.exports);
