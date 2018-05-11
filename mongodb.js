/**
 * Created by danlu on 2018/4/12.
 */


var coon=new Mongo('mongodb://127.0.0.1:27017');
var db=coon.getDB('softapp')




function step1(value1){
  setTimeout(console.log(value1),1)
}
function step2(value1){
  setTimeout(console.log(value1),2)
}
function step3(value1){
  setTimeout(console.log(value1),3)
}
function step4(value1){
  setTimeout(console.log(value1),4)
}
function* longRunningTask(value1) {
  try {
    var value2 = yield step1(value1);
    var value3 = yield step2(value2);
    var value4 = yield step3(value3);
    var value5 = yield step4(value4);
    // Do something with value4
  } catch (e) {
    // Handle any error from step1 through step4
  }
}