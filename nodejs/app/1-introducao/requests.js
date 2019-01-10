
var request = require('request');

process.setMaxListeners(0);

//como o node não é bloqueante
//na execução de qquer função terá um callback
request('http://www.ezconet.com.br/scrum', function(error, response, body) {
    if(!error && response.statusCode == 200 )
        console.log(body);
});