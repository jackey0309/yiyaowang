// 导入config目录下的index.js配置文件，此配置文件中定义了生产和开发环境中所要用到的一些参数
// 关于index.js的文件解释请看我博客的index.js的相关文章
var config = require('../config')
// 下面表示如果如果没有定义全局变量NODE_ENV，则将NODE_ENV设置为"development"
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')// nodejs路径模块
var express = require('express')// nodejs开发框架express，用来简化操作，有兴趣可以自行去了解
var webpack = require('webpack')// 引入webpack模块，用来使用webpack内置插件
//opn插件是用来打开特定终端的，此文件用来在默认浏览器中打开链接 opn(url)
var opn = require('opn')
// 引入http-proxy-middleware插件，此插件是用来代理请求的只能用于开发环境，目的主要是解决跨域请求后台api
var proxyMiddleware = require('http-proxy-middleware')
// 下面的意思是指，如果不是testing环境就引入webpack.dev.conf.js配置文件
// 关于webpack.dev.conf.js配置文件请关注我的相关文章，建议现在就去看，否则后面看着吃力
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
// default port where dev server listens for incoming traffic
// 下面是webpack-dev-server 监听的端口号，因为没有设置process.env.PORT，所以下面监听的就是config.dev.port即8080
var port = process.env.PORT || config.dev.port
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
//     var autoOpenBrowser = !!config.dev.autoOpenBrowser
//   // Define HTTP proxies to your custom API backend
//   // https://github.com/chimurai/http-proxy-middleware
// // 下面是解决开发环境跨域问题的插件，我在config目录index.js文章中有介绍，自行查看
// var proxyTable = config.dev.proxyTable
// 下面是创建node.js的express开发框架的实例，别问我为什么这样，自己看node.js去吧
var server = express()
var compiler = webpack(webpackConfig) // 把配置参数传递到webpack方法中，返回一个编译对象，这个编译对象上面有很多属性，自己去看吧，主要是用到里面的状态函数 如compilation，compile，after-emit这类的
// 下面是webpack-dev-middleware和webpack-hot-middleware两兄弟，这两个是黄金组合
// 而vue作者用这两个插件也是用的最基本的形式，详情看(1) (2)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath, // 使用friendly-errors-webpack-plugin插件这个必须设置为true，具体看我的wepback-dev-config.js
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler) 
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) { // webpack任何一个插件都plugin这个方法，里面可以传递钩子函数，用来在插件各个阶段做特殊处理，钩子函数种类很多
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {  
        hotMiddleware.publish({  // 当插件html-webpack-plugin产出完成之后，强制刷新浏览器
            action: 'reload' 
        })
        cb()
    })
})

var context = config.dev.context

switch(process.env.NODE_ENV){
    case 'local': var proxypath = 'http://localhost:8091'; break;
    case 'online': var proxypath = 'http://elm.cangdu.org'; break;
    default:  var proxypath = config.dev.proxypath;
}
var options = {
    target: proxypath,
    changeOrigin: true,
}
if (context.length) {
    server.use(proxyMiddleware(context, options))// 下面是代理表的处理方法，看看就行了，几乎用不上，除非你是全栈，不用webpack-dev-server，使用后台语言做服务器
}

// handle fallback for HTML5 history API
server.use(require('connect-history-api-fallback')()) // 这个插件是用来解决单页面应用，点击刷新按钮和通过其他search值定位页面的404错误
// 详情请看(3)

// serve webpack bundle output
server.use(devMiddleware) // app.use是在响应请求之前执行的，用来指定静态路径，挂载静态资源

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory) // 下面的staticPath是 static ，path.posix.join其他配置文件中我已经介绍了，这里不再赘述
server.use(staticPath, express.static('./static')) // 挂载静态资源，下面的方法是用虚拟目录来访问资源，staticPath就是虚拟目录路径，其实不管设不设置都是static
// 下面结果就是 'http://localhost:8080'
module.exports = server.listen(port, function(err) { // 这个导出对象是用来对外提供操作服务器和接受数据的接口，vue作者可谓考虑颇深啊
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n') 

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {  
        opn(uri)
    }
})
