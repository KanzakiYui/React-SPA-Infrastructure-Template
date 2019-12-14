const path = require('path')
module.exports = {
    primary: [
        path.resolve(__dirname, '../src/scripts/index.jsx'),
        path.resolve(__dirname, '../src/ts-scripts/index.tsx'),
        path.resolve(__dirname, '../src/scss/index.scss')
    ]
}