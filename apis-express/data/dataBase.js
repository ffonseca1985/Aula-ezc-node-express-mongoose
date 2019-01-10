
(function(dataBase) {

    var mongodb = require('mongodb');
    //a conection string
    var mongoUrl = "mongodb://localhost:27017/ezconetDb";

    var theDb = null;

    dataBase.getDb = function(next) {

        if (!theDb) {
            mongodb.MongoClient.connect(mongoUrl, function(err, db) {
                if (err)
                    next(err, null);
                else
                    {
                        theDb = {
                            db: db,
                            usuario: db.collection('usuario')
                        };

                        next(null, theDb);
                    }        
            });
        } else {
            next(null, theDb);
        }
    };

})(module.exports);