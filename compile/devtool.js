module.exports = isProduction =>
    isProduction ? undefined : 'inline-source-map'