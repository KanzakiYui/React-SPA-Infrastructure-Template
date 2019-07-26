module.exports = isProduction =>
    isProduction ? undefined : 'eval-source-map'