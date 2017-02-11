const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/GDI';

module.exports = function theUsers() {
  console.log('here function working');
  return{
    searchUsers(req, res, next){

      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        db.collection('users')
        .find()
        .toArray((arrayError, data)=> {
          if (arrayError) return next(arrayError);

          res.filteredResults = data;
          console.log('this is data', data);
          return next();
        });

      return false;
    });
  }
}
}
