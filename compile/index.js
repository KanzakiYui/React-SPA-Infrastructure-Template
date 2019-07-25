const configuration = require('./configuration')
const mode = require('./mode')
const entry = require('./entry')
const output = require('./output')
const resolve = require('./resolve')
const webpackModules = require('./module')
const devtool = require('./devtool')
const stats = require('./stats')
const performance = require('./performance')
const devServer = require('./devServer')

module.exports = (param, options) => {
    const config = configuration(options)
    const isProduction = config.isProduction
    const nolint = config.nolint
    return {
        mode: mode(isProduction),
        entry,
        output,
        resolve,
        module: webpackModules(nolint),
        devtool: devtool(isProduction),
        stats,
        performance,
        devServer
    }
}