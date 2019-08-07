const path = require('path')
module.exports = {
    modules: [
        path.resolve(__dirname, '../src/scripts'),
        path.resolve(__dirname, '../src/scss'),
        path.resolve(__dirname, '../src/media'),
        path.resolve(__dirname, '../node_modules'),
    ],
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
}
