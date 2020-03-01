const path = require('path')

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './main.bundle.js',
        // library: "someLibName",
        // libraryTarget: "umd",
        // auxiliaryComment: 'comment'
    },
    externals: {
        // 1，值为字符串时：
        // 属性名可以自定义, 定义的属性名作为项目代码中的模块引入名；
        // 属性值为模块的原始名
        // axios1: 'axios',
        axios: {
            commonjs: 'axios',
            // commonjs2: 'axios',
            // amd: 'axios',
            // root: 'axios'
        }
    }
}