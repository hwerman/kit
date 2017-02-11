const router = require('express').Router();
const theUsers = require('../models/users');
const dbModel = theUsers();

router.get('/', (req,res) => {
  res.render('users/index');
});

router.get('/show', dbModel.searchUsers, (req,res) => {
  res.render('users/show', {
    results: res.filteredResults
  });
});

module.exports = router;
