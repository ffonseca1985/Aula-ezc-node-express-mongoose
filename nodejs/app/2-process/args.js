

process.argv.forEach(function(element){

    if (element == process.argv[0] || element == process.argv[1])
        return;

    console.log(element);
});