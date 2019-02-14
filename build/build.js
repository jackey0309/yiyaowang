// https://github.com/shelljs/shelljs
require('shelljs/global') // 检查NodeJS和npm的版本
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora') // ora，一个可以在终端显示spinner的插件
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start() // 开启loading动画

// 首先将整个dist文件夹以及里面的内容删除，以免遗留旧的没用的文件
// 删除完成后才开始webpack构建打包
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath) // rm，用于删除文件或文件夹的插件
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if (err) throw err // 执行webpack构建打包，完成之后在终端输出构建完成的相关信息或者输出报错信息并退出程序
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})