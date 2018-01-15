var request = require('request');
var fs = require('fs');
request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
   // console.log(body) // IT笔录主页的HTML
  }
})


request('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2208082549,1989069819&fm=58').pipe(fs.createWriteStream('./doodle.png'));
request.get('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2208082549,1989069819&fm=58').pipe(request.put('http://localhost:9051/imgdev.png'))
