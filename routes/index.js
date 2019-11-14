var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    res.render('index', {
      title: 'ex',
      user: req.user
    })
  } else {
    res.render('index', {
      title: 'express'
    })
  }
});

module.exports = router;
