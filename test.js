process.env.NODE_CONFIG_DIR=[__dirname,'app', 'config'].join('/')
var config=require('config');
var port=config.get('port');
console.log('sss');
console.log(port);
process.env.PORT=port;
//process.env.src_dir=port;