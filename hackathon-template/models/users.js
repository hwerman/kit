const { MongoClient } = require('mongodb');
const dbConnection = 'mongodb://localhost:27017/GDI';

module.exports = function theUsers() {

  return{
    searchUsers(req, res, next){

    const filterObj ={};
    const qs = req.query;

    if (qs.username !== '') filterObj.username = new RegExp(`\\b${qs.username}`, 'i');
    if (qs.email !== '') filterObj.email = new RegExp(`\\b${qs.email}`, 'i');
    if (qs.name !== '') filterObj.name = new RegExp(`\\b${qs.name}`, 'i');

      MongoClient.connect(dbConnection, (err, db) => {
        if (err) return next(err);

        db.collection('users')
        .find(filterObj)
        .toArray((arrayError, data)=> {
          if (arrayError) return next(arrayError);

          res.filteredResults = data;
          return next();
        });

      return false;
    });
  }
}
}
