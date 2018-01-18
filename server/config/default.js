module.exports = {
  "app":{
    "port":9051,
    middleware:{
      session:{
        sId:"node_session",
        "path": "./tmp/session"
      }
    }
  }
}