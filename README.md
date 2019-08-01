# Overview
1. This is an **useful, developer-friendly React SPA Infrastructure template**.
2. It already set up lots of configuration while all of them are exposed and can be easily replaced upon requirement.
3. It makes both commands and configurations as easy & light as possible.
4. It includes few resources (e.g. reboot.scss, background image etc.) as template. Feel free to modify or remove them.
5. **Windows environment is recommended**.
6. You can use this repository as a fundamental architecture to easily start your React SPA asap.

# All Available Commands
**Pattern**
```
node do [command] [option1[=value1]] [option2[=value2]] ...
```
For example:
```
node do server
node do server nolint prod port=8008

node do lint
node do lint fix
```
  
## 1. server
1. This command is used to start/test server & application under various environment/conditions.
2. It will show current configuration information in terminal and automatically open new tab in your default browser.
3. The application is available on both `localhost:[port]` and your LAN (e.g. `192.168.1.100:[port]`).

### Available Options

| OPTION | VALUE | DESCRIPTION | DEFAULT |
| :---: | :---: | ------------- | ------------- |
| **nolint**  | N/A | disable the ES linter | linter is enabled |
| **prod**  | N/A | switch to **production** environment | development environment  |
| **port**  | **Integer** | run application in given port number | port=3000  |

## 2. format
1. This command is used to automatically format all existing `*.{js|jsx}` files under `src` folder.
2. It actually takes advantage of [Prettier](https://github.com/prettier/prettier)
3. Beside this manual command, formatting will also be done automatically once you push any commit thanks to a pre-commit hook attached.

## 3. lint
1. Although when you start the application, you can view all lint warnings in browser console, however we also provide alternative to check your syntax & best practice problems in more straightforward way.
2. By Using this command, it will output all lint warnings in your terminal directly. The application won't start a local server to run this application in order to save resource/memory.

### Available Options

| OPTION | VALUE | DESCRIPTION | DEFAULT |
| :---: | :---: | ------------- | ------------- |
| **fix**  | N/A | it will try to fix as many warnings as possible  | just show warnings info without trying to fix |

### Pre-commit Hook
The built-in pre-commit hook will automatically use both **eslint** and **prettier** to fix **part of** code styles / best practice issues before your commit (e.g. `git add-commit`).
If it detects any error instead of warnings then the commit will be prevented.
Thanks to **lint-staged**, your commit and auto-fix commit will be merged into one commit.

**Reference**

1. [pretty-quick](https://github.com/azz/pretty-quick)
2. [eslint](https://github.com/eslint/eslint)
3. [husky](https://github.com/typicode/husky)
4. [lint-staged](https://github.com/okonet/lint-staged)

Please feel free to configure it to suit your preference.

## 4. build
1. Create a bundle file containing all necessary resources.
2. Media resources like images will be created separately.
3. All created files are under `assets` folder.
4. Once created, you can directly open `assests/index.html` in your browser without a local server.

# Best Practice
## ECMAScript(ES) Rules
1. In the `src/scripts/.eslintrc.json` file, we included not only all rules covered by _**eslint:recommended**_ and _**plugin:react/recommended**_, but also lots of extra rules.
2. Please refer them before you make any PR and any contributions. **Before merging your PR, you must clear all the linter warnings & errors!**.
3. You are welcome to share your opinion about enhancing code styles and best practices.
