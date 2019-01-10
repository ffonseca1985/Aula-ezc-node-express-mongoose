
var request = require('request');

var requisicao = request('http://www.ezconet.com.br/scrum');

requisicao.on('data', function(html) {
    console.log(html.toString());
});

requisicao.on('end', function() {
    console.log('<==Terminou==>');
});