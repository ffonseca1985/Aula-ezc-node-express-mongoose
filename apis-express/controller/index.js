(function(controllers){

    var usuarioController = require('./usuarioController');

    controllers.init = function(app){

        usuarioController.init(app);
    }

})(module.exports);