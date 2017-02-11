const router = require('express').Router();
const theFriends = require('../models/friends');
const dbModel = theFriends();

router.get('/friends', dbModel.searchFriends, (req,res) => {
  res.render('users/friends', {
    results: res.friendsResults
  });
});

module.exports = router;
