

console.log(global);

//TUDO QUE COLOCARMOS NO GLOBAL ESTARA DISPONIVEL
//NA APLICACAO
global.contador = 1;

Object.keys(global).forEach(function(value){
    console.log(value);
});


