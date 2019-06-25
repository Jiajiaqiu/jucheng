const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATH = {
    app:path.join(__dirname,"src/main.js"),
    build:path.join(__dirname,"./dist")
}


module.exports = {
    mode:"development",
    entry:{
        app:PATH.app
    },
    output:{
        filename:"[name].js",
        path:PATH.build
    },
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                },"sass-loader"],
              
            },
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/env","@babel/react"]
                    }
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"[name][hash].[ext]",
                        limit:100,
                        outputPath:"./img"
                    }
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name][path].[ext]",
                        outputPath:"./iconfont"
                    }
                }
            }
        ]
    },
    plugins:[
        // [
        //     'umi-plugin-react',
        //     {
        //         antd: true,
        //         dva: true,
        //     },
        // ],
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"index.html"
        })
    ],
    devServer:{
        proxy:{
            '/RestTheatre':{
                target:'https://m.juooo.com',
                changeOrigin:true
            },
            '/home': {
                target: 'https://m.juooo.com',
                changeOrigin: true
            },
            '/Search': {
                target: 'https://m.juooo.com',
                changeOrigin: true
            }
        }
        // proxy: {
        //     '/home': {
        //         target: 'https://m.juooo.com',
        //         changeOrigin: true
        //     }
        // }
    },
    resolve:{
        alias:{
            "@":path.join(__dirname,"scr")
        }
    }
}
