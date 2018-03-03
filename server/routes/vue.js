/**
 * Created by danlu on 2018/1/26.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  console.log('index');
  res.render('index', { title: 'Express' });

});

//module.exports = router;
module.exports = function(req, res, next) {
  console.log('render vue is ok');
  if(!!req.session&&req.session.user!=null){
    console.log('session.user login is oks');
    res.render('vue', { title: 'Express' });
  }else {
    console.log('render no login is ok');
    res.redirect('/login');
  }

};