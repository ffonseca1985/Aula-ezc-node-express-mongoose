var logT = {
    log: function(msg){
        process.stdout.write(msg)
    },
    erro: function(msg){
        process.stderr.write(msg)
    }
}

logT.log('testando..');
logT.erro('erro...');