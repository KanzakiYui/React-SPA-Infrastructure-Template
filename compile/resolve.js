const path = require('path')
module.exports = {
    modules: [
        path.resolve(__dirname, '../scr/scripts'),
        path.resolve(__dirname, '../scr/scss'),
        path.resolve(__dirname, '../scr/media'),
        path.resolve(__dirname, '../node_modules'),
    ],
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
}
