

process.stdin.on('readable', function(){

    var item = process.stdin.read();

    if (item)
        console.log(item.toString());
});