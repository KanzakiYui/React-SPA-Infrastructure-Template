const childProcess = require('child_process')
const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const child = childProcess.spawn(command, ['run', 'format'])
child.stdout.on('data', data => {
    console.log(data.toString())
})
child.stderr.on('data', data => {
    console.log(data.toString())
})
