const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/GDI';

module.exports = function theFriends() {
  console.log('here function working');
  return{
    searchFriends(req, res, next){

      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        db.collection('users')
        .find({'firstName' : 'Jack'})
        .toArray((arrayError, data)=> {
          if (arrayError) return next(arrayError);

          res.friendsResults = data;
          console.log('this is THE FRIENDS', data);
          return next();
        });

      return false;
    });
  }
}
}
