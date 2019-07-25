const path = require('path')
module.exports = ({ port }) => ({
    contentBase: path.resolve(__dirname, '../assets'),
    port,
    hot: true,
    historyApiFallback: true,
    clientLogLevel: 'warn',
    noInfo: true
})