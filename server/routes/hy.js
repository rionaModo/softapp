var express = require('express');
var router = express.Router();



//module.exports = router;
module.exports = function(req, res, next) {
    console.log('render index is ok');

    res.render('hy/'+req.params.page, { title: '好运无忧' });
};