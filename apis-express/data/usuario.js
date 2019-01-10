
(function (data) {

    var seedData = require('./seedData');
    var dataBase = require('./dataBase');
    var UsuarioModel = require('../model/usuarioModel');

    data.create = function(usuario, next){

        dataBase.getDb(function(err, db) {
            if(err){
                next(err, null);
            }
            else {
                db.usuario.find({ nome:usuario.nome }).count(function(err, count) {
                    if (count != 0){
                           next('usuário já cadastrado', null);
                    }else {

                        var model = new UsuarioModel({
                            nome: usuario.nome,
                            email: usuario.email,
                            idade: usuario.idade,
                            profissoes: usuario.profissoes        
                        });

                        //caso queira colocar uma validação em tempo de 
                        //execução:
                        UsuarioModel.schema.path('nome').validate(function(value){
                            return value.length > 5;
                        });

                        model.save(function(err) {
                            if (err)
                                next(err, null);
                            else{
                                next(null, model);
                            }    
                        });
                    }
                });
            }
        });
    };

    data.getAll = function (next) {

        dataBase.getDb(function (err, db) {
            if (err)
                next(err, null);
            else {
                //1 => ascendente
                //-1 => descendente
                db.usuario.find()
                    .sort({ name: 1 })
                    .toArray(function (err, usuarios) {
                        if (err)
                            next(err, null);
                        else
                            next(null, usuarios);
                    });
            }
        });
    };

    function seedDataBase() {

        dataBase.getDb(function (err, db) {
            if (err)
                console.log(err);
            else {
                db.usuario.count(function (err, count) {
                    if (count == 0) {
                        console.log('usuário sem dados');

                        seedData.Initialize.forEach(function (item) {
                            db.usuario.insert(item, function (err) {
                                if (err)
                                    console.log(`${item.nome} não inserido`);
                                else
                                    console.log(`${item.nome} inserido`);
                            });
                        });
                    } else {
                        console.log('usuario já com dados');
                    }
                });
            }
        });
    }

    seedDataBase();

})(module.exports);