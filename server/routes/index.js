var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
/* GET home page. */
router.get('*', function(req, res, next) {
  console.log('index');
  res.render('index', { title: 'Express' });

});

module.exports = router;
