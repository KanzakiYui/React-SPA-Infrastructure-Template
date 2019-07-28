# Overview
Coming soon...


# All Available Commands
## 1. _node run_
1. This command is used to start/test server & application under various environment/conditions.
2. After you run the command, it will show default configuration (_**You can use it as reference to see what options are available**_) in terminal soon and automatically open new tab in browser (by default it will open `localhost:[port]`).
3. The application is available on both `localhost` and your LAN (e.g. `192.168.1.100:[port]`).

### Available Options
1. To run application with options, you can use `node run option1 option2 option3...` pattern.
2. Some options accpet values and you can use **optionX=Y** to pass values to options.
3. Most of options are compatible with others.
4. You are welcome to give suggestion to provide more useful & user-friendly commands.
5. Example: `node run nolint port=8001`

| OPTION | VALUE | DESCRIPTION | DEFAULT |
| :---: | :---: | ------------- | ------------- |
| **nolint**  | N/A | disable the ES linter | linter is enabled |
| **prod**  | N/A | switch to **production** environment | development environment  |
| **port**  | **Integer** | run application in given port number | port=3000  |

## 2. _npm run format_
1. This command is used to automatically format all existing `*.{js|jsx}` files under `src` folder.
2. It actually takes advantage of [Prettier](https://github.com/prettier/prettier)
3. Beside this manual command, you can just push you commit since there is a pre-commit hook attached which will format your code automatically

### Pre-commit Hook
1. [pretty-quick](https://github.com/azz/pretty-quick)
2. [husky](https://github.com/typicode/husky)

## 3. _npm run lint_
1. Although when you start the application, you can view all lint warings in browser console, however we also provide alternative to check your syntax & best practice problems in more straightforward way.
2. Using this command will output all lint warnings in your termianl directly and application won't occupy resource/memory to start a local server to run this application.

## 4. _npm run build_
1. Create a bundile file containing all necessary resources (media resources like images etc. will be created separately)
2. All created files are under `assets` folder. Actually, you can directly open `index.html` in your browser once you bundled files, no need local server to serve requests.

# Best Practice
## ECMAScript(ES) Rules
1. In the `src/scripts/.eslintrc.json` file, we not only included all rules covered by _**eslint:recommended**_ and _**plugin:react/recommended**_ but also lots of extra rules.
2. Please refer them before you make any PR and any contributions. **Before merging your PR, you must clear all the linter warnings & errors!**.
3. And of course, you are welcome to share your opinion about enhancing code styles and best practices.
