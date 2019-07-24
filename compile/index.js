const mode = require('./mode')
const entry = require('./entry')
const output = require('./output')
const resolve = require('./resolve')
const webpackModules = require('./module')
const devtool = require('./devtool')
const stats = require('./stats')
const performance = require('./performance')
const devServer = require('./devServer')

module.exports = () => {
    return {
        mode: mode(false),
        entry,
        output,
        resolve,
        module: webpackModules,
        devtool: devtool(false),
        stats,
        performance,
        devServer
    }
}