const path = require("path");

module.exports = {
    devServer:{
        open:true,
        proxy:{
            "/abc":{
                target:"https://bbs.youxiake.com",
                changOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            },
           "/h5":{
                    //域名
                target:"https://m.youxiake.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/h5":""
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