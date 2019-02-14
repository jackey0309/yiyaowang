var path = require('path') //使用 NodeJS 自带的文件路径插件
var config = require('../config') //引入 config/index.js
var utils = require('./utils')  //引入 config/index.js
var projectRoot = path.resolve(__dirname, '../') // 拼接我们的工作区路径为一个绝对路径
/* 将 NodeJS 环境作为我们的编译环境 */
var env = process.env.NODE_ENV  
    // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
    // various preprocessor loaders added to vue-loader at the end of this file
    /*是否在 dev 环境下开启 cssSourceMap ，在 config/index.js 中可配置 */
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
/* 是否在 production 环境下开启 cssSourceMap ，在 config/index.js 中可配置 */
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
/* 最终是否使用 cssSourceMap */
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd


module.exports = {
    entry: {
        app: './src/main.js'// 编译文件入口
    },
    output: {
        path: config.build.assetsRoot, // 编译输出的静态资源根路径
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,// 正式发布环境下编译输出的上线路径的根路径
        filename: '[name].js'// 编译输出的文件名
    },
    // resolve是webpack的内置选项，顾名思义，决定要做的事情，也就是说当使用 import "jquery"，该如何去执行这件事
    // 情就是resolve配置项要做的，import jQuery from "./additional/dist/js/jquery" 这样会很麻烦，可以起个别名简化操作
    resolve: {
         // 自动补全的扩展名
        extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],
           // 不进行自动补全或处理的文件或者文件夹
        fallback: [path.join(__dirname, '../node_modules')],
         // 默认路径代理，例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
        alias: {
             //后面的$符号指精确匹配，也就是说只能使用 import vuejs from "vue" 这样的方式导入vue.esm.js文件，不能在后面跟上 vue/vue.js
            'vue$': 'vue/dist/vue.common.js',//配置别名，如果你在一个很深的文件引入其他文件中有一个很深的文件，我们就用@来代替src
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    // module用来解析不同的模块
    module: {
        loaders: [{
            test: /\.vue$/,
            //对vue文件使用vue-loader，该loader是vue单文件组件的实现核心，专门用来解析.vue文件的
            loader: 'vue'
            // 将vueLoaderConfig当做参数传递给vue-loader,就可以解析文件中的css相关文件
        }, {
            test: /\.js$/,

        // 对js文件使用babel-loader转码,该插件是用来解析es6等代码
            loader: 'babel',
             // 指明src和test目录下的js文件要使用该loader
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
             // 对图片相关的文件使用 url-loader 插件，这个插件的作用是将一个足够小的文件生成一个64位的DataURL
        // 可能有些老铁还不知道 DataURL 是啥，当一个图片足够小，为了避免单独请求可以把图片的二进制代码变成64位的
        // DataURL，使用src加载，也就是把图片当成一串代码，避免请求，神不神奇？？
            loader: 'url',
            query: {
          // 限制 10000 个字节一下的图片才使用DataURL
                limit: 10000,
                // 下面这个应该是指将[name].[hash:7].[ext]对应的图片使用url-loader测试吧，这个我是真不知道干啥的，如果知道
          // 的兄弟，一定要留言给我啊，拜谢
                name: utils.assetsPath('img/[name].[ext]')// 这个函数执行结果是 /img/[name].[hash:7].[ext]
                // 不知道吧 name 设置成 /img/[name].[hash:7].[ext] 意欲何为，猜测应该是输出图片的路径或者是解析图片的路径
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            // 字体文件处理，和上面一样
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    vue: {
          // .vue 文件配置 loader 及工具 (autoprefixer)
        loaders: utils.cssLoaders({
            sourceMap: useCssSourceMap
        }),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 10 versions']
            })
        ]
    }
}