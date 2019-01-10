
var EventEmitter = require('events').EventEmitter;

var contador = function (total) {

    var e = new EventEmitter();

    process.nextTick(function () {
        
        var count = 0;

        e.emit('start');

        var t = setInterval(function () {
            e.emit('data', count++);

            if (count >= total) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 1000);
    });
    return e;

};

var eventoContador = contador(10);

eventoContador.on('start', function () {
    console.log('começando...');
});

eventoContador.on('data', function (valor) {
    console.log('valor => ' + valor);
});

