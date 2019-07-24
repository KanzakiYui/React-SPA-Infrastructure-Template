const path = require('path')
module.exports = {
    contentBase: path.resolve(__dirname, '../assets'),
    port: 3000,
    hot: true,
    // work together with Web History API?
    historyApiFallback: true,
    clientLogLevel: 'warn',
    noInfo: true
}