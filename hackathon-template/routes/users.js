const router = require('express').Router();
const dbModel = require('../models/users');

router.get('/', (req,res) => {
  res.render('users/');
});

router.get('/show', dbModel.theUsers, (req,res) => {
  res.render('users/show', {
    results: res.filteredResults
  });
});

module.exports = router;
