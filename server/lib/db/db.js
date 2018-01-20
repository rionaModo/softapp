
var mongoose=require('mongoose');
var config=require('config');
mongoose.connect(config.get('app.mongodb.url'),config.get('app.mongodb.options')||{});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open',function(){
    console.log('db is open');

});
module.exports=db;