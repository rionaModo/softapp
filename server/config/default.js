module.exports = {
  "app":{
    "port":9051,
    webpack:true,
    mongodb:{
      //disabled:false,
      url:'mongodb://localhost:27017/softapp',
      options:{
        keepalive: '5000',
        poolSize: 4 ,
        autoIndex:false
      },
      auto_inc:{
        soft_content:'5a713abbfb1ba9620cbaf99b'
      }
    },
    request:false,
    middleware:{
      session:{
        name:"sKeyy",
        store:{
          path: "./tmp/session",
          ttl : 1800
        },
        secret:'softapp'
      },
      cookieParser:{
        secret:'mysoftapp'
      },
      bodyParser:{
        json:{},
        urlencoded:{
          extended: false
        }
      }

    }
  }
}