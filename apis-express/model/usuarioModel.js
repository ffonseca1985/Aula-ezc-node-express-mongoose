
var  mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var profissoesSchema = new mongoose.Schema({
    nome: {type: String, default: 'Desenvolvedor', required: true},
    salario: {type: Number, max: 2000}
});

var sizeValidation = [  
    function(val) {
        return val.length > 3;
    }
];

var emailValidation = [
    function(val) {
           var regex = /[a-z0-9._%+-]+@[a-z0-9.-]+/;
           return regex.test(val);
    }
];

var usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true, validate: sizeValidation},
    idade: Number,
    email: {type: String, validate: emailValidation},
    profissoes :[profissoesSchema]
}, {collection: 'usuario'});


module.exports = mongoose.model('usuario', usuarioSchema);