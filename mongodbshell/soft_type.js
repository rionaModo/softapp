/**
 * Created by danlu on 2018/1/25.
 */



// mongo --nodb soft_type.js

var host="127.0.0.1:27017";
conn = new Mongo(host);
db = conn.getDB("softapp");
printjson(db.soft_type.findOne());








