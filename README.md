# API Documentation
## Overview
Coming soon...


## Compile & Command
### How to run the project
1. Open terminal and go to root folder.
2. Run command `node run`, it will show default configuration (_**You can use it as reference to see what options are available**_) in terminal soon and automatically open new tab in browser (by default it will open `localhost:[port]`).
3. The application is available on both `localhost` and your LAN (e.g. `192.168.1.100:[port]`).

### Available command options
1. To run application with options, you can use `node run option1 option2 option3...` pattern.
2. Some options accpet values and you can use **optionX=Y** to pass values to options.
3. Most of options are compatible with others.
4. You are welcome to give suggestion to provide more useful & user-friendly commands.

| OPTION | VALUE | DESCRIPTION | DEFAULT |
| :---: | :---: | ------------- | ------------- |
| **nolint**  | N/A | disable the ES linter | linter is enabled |
| **prod**  | N/A | switch to **production** environment | development environment  |
| **port**  | **Integer** | run application in given port number | port=3000  |


## Best Practice
### ES Rules
1. In this `src/scripts/.eslintrc.json` file, we not only included all rules covered by _**eslint:recommended**_ and _**plugin:react/recommended**_ but also lots of extra rules.
2. Please refer them before you make any PR and any contributions. **Before merging your PR, you must clear all the linter warnings & errors!**.
3. And of course, you are welcome to share your opinion about enhancing code styles and best practices.
