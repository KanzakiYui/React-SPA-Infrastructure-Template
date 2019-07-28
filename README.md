# Overview
1. This is an **useful, developer-friendly React SPA Infrastructure template**. It already set up lots of configuration and all of them are totally replaceable.
2. You can use this repository as a fundamental structure to easily start your React SPA asap.
3. It exposes all configurations without heavy dependencies (**as light as possible**)
4. It includes few media resources (image, icon, etc.), you can replace them upon your demand.
4. Windows environment is recommended.

# All Available Commands
## 1. _node run_
1. This command is used to start/test server & application under various environment/conditions.
2. After you run the command, it will show default configuration (_**You can use it as reference to see what options are available**_) in terminal soon and automatically open new tab in browser (by default it will open `localhost:[port]`).
3. The application is available on both `localhost` and your LAN (e.g. `192.168.1.100:[port]`).

### Available Options
1. To run application with options, you can use `node run option1 option2 option3...` pattern.
2. Some options accept values and you can use **optionX=Y** to pass values to options.
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

## 3. _npm run lint_
1. Although when you start the application, you can view all lint warnings in browser console, however we also provide alternative to check your syntax & best practice problems in more straightforward way.
2. By Using this command, it will _**try to fix**_ all possible lint issues and then output all remaining lint warnings in your terminal directly. The application won't start a local server to run this application so that resource/memory will be saved.
3. However, it's highly recommended to fix all linter warnings before you merge the PR.

### Pre-commit Hook
The pre-commit hook will automatically use both eslint and prettier try to fix all code styles / best practice issues before your commit (e.g. `git add-commit`). If some fix failed then the commit will be prevented. Thanks to lint-staged, usually you just need to commit once and the underlying auto-process will handle all dirty stuffs for you.

1. [pretty-quick](https://github.com/azz/pretty-quick)
2. [eslint](https://github.com/eslint/eslint)
3. [husky](https://github.com/typicode/husky)
4. [lint-staged](https://github.com/okonet/lint-staged)

Please feel free to configure it to suit your preference.

## 4. _npm run build_
1. Create a bundle file containing all necessary resources (media resources like images etc. will be created separately)
2. All created files are under `assets` folder. Actually, you can directly open `index.html` in your browser once you bundled files, no need local server to serve requests.

# Best Practice
## ECMAScript(ES) Rules
1. In the `src/scripts/.eslintrc.json` file, we not only included all rules covered by _**eslint:recommended**_ and _**plugin:react/recommended**_ but also lots of extra rules.
2. Please refer them before you make any PR and any contributions. **Before merging your PR, you must clear all the linter warnings & errors!**.
3. And of course, you are welcome to share your opinion about enhancing code styles and best practices.
