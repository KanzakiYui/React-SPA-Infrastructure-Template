module.exports = ({
    nolint,
    prod
}) => {
    const configuration =  {
        nolint: nolint ? true : false,
        isProduction:  prod ? true : false
    }
    console.group('\x1b[92m', 'Configuration')
    Object.entries(configuration).forEach(([key, value])=>{
        console.log('\x1b[97m Set\t \x1b[96m', key, '\t\x1b[97m to\t\x1b[93m', value)
    })
    console.groupEnd()
    console.log('\x1b[37m\n')
    return configuration
}