// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path') // path是node.js的路径模块，用来处理路径统一的问题

module.exports = {
    // 下面是build也就是生产编译环境下的一些配置
    build: {
        // 导入prod.env.js配置文件，只要用来指定当前环境，详细见(1)
        env: {
            NODE_ENV: '"production"'
        },
        // 下面是相对路径的拼接，假如当前跟目录是config，那么下面配置的index属性的属性值就是dist/index.html
//path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
        index: path.resolve(__dirname, '../elm/index.html'),
        // 下面定义的是静态资源的根目录 也就是dist目录
        assetsRoot: path.resolve(__dirname, '../elm'),
        // 下面定义的是静态资源根目录的子目录static，也就是dist目录下面的static
        assetsSubDirectory: 'static',
        // 下面定义的是静态资源的公开路径，也就是真正的引用路径
        assetsPublicPath: '/elm/',
        // 下面定义是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        // 下面是是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin
        productionGzip: false,
        // 下面定义要压缩哪些类型的文件
        productionGzipExtensions: ['js', 'css']
        // 下面的process.env.npm_config_report表示定义的一个npm_config_report环境变量，可以自行设置
    //bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: {
            // 引入当前目录下的dev.env.js，用来指明开发环境，详见(2)
            NODE_ENV: '"development"'
        },
        // 下面是dev-server的端口号，可以自行更改
        port: 8093,
        // 下面表示是否自定代开浏览器
        //autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        // 下面是代理表，作用是用来，建一个虚拟api服务器用来代理本机的请求，只能用于开发模式 // 详见(3)
      //vue-cli使用这个功能是借助http-proxy-middleware插件，一般解决跨域请求api
//     proxyTable: {
//         '/list': {
//             target: 'http://api.xxxxxxxx.com', -> 目标url地址
//             changeOrigin: true, -> 指示是否跨域
//             pathRewrite: {
//             '^/list': '/list' -> 可以使用 /list 等价于 api.xxxxxxxx.com/list
//             }
//         }
//     }
        context: [ //代理路径
            '/img',
            '/v1', 
            '/v2',
        ],
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        // 是否生成css，map文件，上面这段英文就是说使用这个cssmap可能存在问题，但是按照经验，问题不大，可以使用 
// 给人觉得没必要用这个，css出了问题，直接控制台不就完事了
        cssSourceMap: false
    }
}