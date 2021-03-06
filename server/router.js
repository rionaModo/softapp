var express = require('express');
var router=express.Router();



 // var users = require('./server/routes/users');
 //
/*  router.get('/test', function(req, res, next) {
      console.log('Request URL:', req.originalUrl);
      next();
    }, function (req, res, next) {
      console.log('Request Type:', req.method);
    res.send('Something broke!');
    }
  );*/


//require('./lib/fn/api')

router.use(['/api/:c/:a','/api/:c','/api'],require('./lib/fn/api'));
router.use(['/$','/index.htm','/index.html'],require('./routes/index'));
router.use(['/search/:code.html','/search.html'],require('./routes/index'));
router.use(['/detail','/detail.htm','/detail.html'],require('./routes/detail'));
router.use(['/detail/list_:id.html','/detail.html'],require('./routes/detail'));
router.use('/hy/:page.html',require('./routes/hy'));


router.use('/login',require('./routes/login'));
router.use(require('./routes/vue'));


//app.use('/VC', contro);
//app.use('/VR', router);
// catch 404 and forward to error handler
/*  router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  // error handler
  router.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });*/



module.exports= router;





