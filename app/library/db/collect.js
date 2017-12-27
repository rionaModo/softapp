/**
 * Created by riona on 2017/12/17.
 */
var mongoose=require('mongoose')



mongoose.connect('mongodb://localhost:27017/softapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('open');
    var kittySchema = mongoose.Schema();
    kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name"
        console.log(greeting);
    }
    var Kitten = mongoose.model('users', kittySchema);
    /*var fluffy = new Kitten({ name: 'fluffy' });
     fluffy.save(function (err, fluffy) {
     if (err) return console.error(err);
     fluffy.speak();
     });*/
    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens)
    })
});