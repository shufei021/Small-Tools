//向外暴露一个打包配置对象 因为webpack是基于Node构建的，所有webpack支持所有的Node API 语法
const path = require('path')   //导入node.js 中专门操作路径的模块
module.exports = {
	mode: 'production', // development   production
	//entry：{}  //在webpack 4x 中，有一个很大的特性，就是约定大于配置，约定默认的打包入口路径是 src -> index.js
    entry: path.join(__dirname,'./src/index.js'),  //打包入口文件的路径
    output: {
        filename:'util.js',   //输出文件的名称
        library:'util',//配置这里 支持script标签引入
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    devtool: 'source-map',
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}

//目前不行，这是ES6中的向外导出模块的API 与之对应是 import xx from "标识符"
//export default {}