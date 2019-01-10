
(function(data){

    var seedData = require('./seedData');

    //next => um callback da controller
    data.getAll = function(next) {
        next(null, seedData.Initialize);
    };

})(module.exports);