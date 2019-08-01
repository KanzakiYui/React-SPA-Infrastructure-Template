module.exports = ({ nolint, prod, port, build }) => {
  const configuration = {
    nolint: nolint ? true : false,
    isProduction: prod ? true : false,
    port: port ? Number(port) : 3000,
    isBuild: build ? true : false
  }
  if (build) {
    console.log("\x1b[92m", "Start to bundle all files...")
    console.log("\x1b[37m\n")
  } 
  else {
    console.group("\x1b[92m", "Configuration")
    Object.entries(configuration).forEach(([key, value]) => {
      if (key !== "isBuild")
        console.log(
          "\x1b[97m Set\t \x1b[96m",
          key.padEnd(20, " "),
          "\t\x1b[97m to\t\x1b[93m",
          value
        )
    })
    console.groupEnd()
    console.log("\x1b[37m\n")
  }
  return configuration
}
