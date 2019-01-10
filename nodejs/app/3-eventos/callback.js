

var calcular = function(a, b, callback){
    if (a && b)
        return callback(a, b);
};

var soma = function(a, b){
    return a + b;
};

var subtracao = function(a, b){
    return a - b;
};

var resultSoma = calcular(1, 2, soma);
var resultSubracao = calcular(1, 2, subtracao);

console.log(resultSoma);
console.log(resultSubracao);

