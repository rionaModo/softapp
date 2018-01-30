var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  console.log('index');
  res.render('index', { title: 'Express' });

});

//module.exports = router;
module.exports = function(req, res, next) {

  console.log('render index is ok');
  console.log(req.params);
  var params={"c":"soft_content","a":"search","limit":10}
  if(!!req.params.code){
    params.resource_type=req.params.code;
  }
  var collect=require('../lib/db')(params,function(data){
    res.render('index', { softinfo: data });
  });
};