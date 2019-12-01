var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    if (req.user.usertype === 1) {
      console.log('user')
      res.render('index', {
        title: 'ex',
        user: req.user.usertype
      })
    } else if (req.user.usertype === 2) {
      console.log('admin')
      res.render('index', {
        title: 'aex',
        user: req.user.usertype
      })
    }
  } else {
    console.log('guset')
    res.render('index', {
      title: 'express'
    })
  }
});

module.exports = router;
