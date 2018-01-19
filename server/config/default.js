module.exports = {
  "app":{
    "port":9051,
    middleware:{
      session:{
        name:"sKeyy",
        store:{
          path: "./tmp/session",
          ttl : 1800
        },
        secret:'softapp'
      }
    }
  }
}