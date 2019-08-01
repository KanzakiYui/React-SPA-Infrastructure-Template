const childProcess = require('child_process')
const doCommandConstants = require('./constants')

const param = process.argv
const command = param[2]

const options = param.slice(3).map(rawOption => {
    if(!rawOption.includes('='))
        return `--${rawOption}=true`
    const parsedArray = rawOption.split('=')
    return `--${parsedArray[0]}=${parsedArray[1]}`
})
const child = childProcess.spawn(
    process.platform === 'win32' ? 'npm.cmd' : 'npm', 
    ['run', command, '--', ...options]
)

child.stdout.on('data', data => {
    console.log(data.toString())
})
if(!doCommandConstants.terminalOutputExclusionCommands.includes(command))
    child.stderr.on('data', data => {
        console.log(data.toString())
    })
