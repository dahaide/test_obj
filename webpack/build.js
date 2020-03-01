const webpack = require('webpack')
const conf = require('./webpack.config')

// 打包指令 方式：
// 1，打包指令可以通过在项目根目录下运行webapck指令( 根目录下需要有webpack.config.js配置文件 )
// 2，通过webpack()方法，node build.js指令 执行打包操作
// 
// webpack()方法需要注意以下问题:
// - 通过webpack()方法执行配置文件的打包时，webpack方法必须要带第二个参数( 回调函数表达式 );
webpack(conf, (err, stats) => {}) // 正确生成打包文件
// - 如果不带第二个参数，打包过程不会报错，但是无法生成打包后的文件
// webpack(conf) // 没有文件生成
