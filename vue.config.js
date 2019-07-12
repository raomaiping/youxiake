const path = require("path");

module.exports = {
    publicPath:"youxiake",
    devServer:{
        open:true,
        proxy:{
            "/visas":{
                target:"https://m.youxiake.com",
                changOrigin:true,
                ws: false, 

            },

            "/h5":{
                target:"https://h5.youxiake.com",
                changOrigin:true,
                ws: false, 
                pathRewrite:{
                    "^/h5":""
                },
            },
            "/abc":{
                target:"https://m.youxiake.com",
              changOrigin:true,
              ws: false, 
                pathRewrite:{
                    "^/abc":""
                }
            },
            "/lai":{
                target:"https://bbs.youxiake.com",
                changOrigin:true,
                ws: false, 
                pathRewrite:{
                    "^/lai":""
                }
            },
            "/special_getBkdataAjax":{
                target:"http://www.youxiake.com",
                changOrigin:true,
                ws: false, 
               
            },
            "/movie":{
                target:"http://39.97.33.178",
                changOrigin:true,
                ws:false,
                pathRewrite:{
                    "^/movie":""
                }
            },
            "/maoyan":{
                target:"http://39.97.33.178",
                changOrigin:true,
                ws:false,
                pathRewrite:{
                    "^/maoyan":""
                }
            }
        }
    },

    configureWebpack:{
        resolve:{
            alias: {
                "@":path.resolve(__dirname,"./src/"),
                "common":path.resolve(__dirname,"./src/common"),
                "components":path.resolve(__dirname,"./src/components"),
                "router":path.resolve(__dirname,"./src/router"),
                "store":path.resolve(__dirname,"./src/store"),
                "utils":path.resolve(__dirname,"./src/utils"),
                "views":path.resolve(__dirname,"./src/views"),
                "api":path.resolve(__dirname,"./src/api"),
                "assets":path.resolve(__dirname,"./src/assets")
            }
            
        }
    }
}