var request = require('request');
var fs = require('fs');
request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
   // console.log(body) // IT笔录主页的HTML
  }
})


//request('http://static.danlu.com/20180111/mall/optimization/resources/images/home/newIndex/icon_liquor.png').pipe(fs.createWriteStream('./doodle.png'));
request.get('http://static.danlu.com/20180111/mall/optimization/resources/images/home/newIndex/icon_liquor.png').pipe(request.put('http://localhost:9051/images/doodle.png'))
