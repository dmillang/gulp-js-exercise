# How to initiate a project that uses Gulpjs

## Globals you need before starting:

* Have npm and node installed
    * Check by typing `node -v` and `npm -v` on the Terminal
        * Can be checked on root folder of project folder, it doesn't matter. 
        * If a number of version appears for each one you are good to go.
* Have gulp installed globally
    * Check by typing `gulp -v`
    * If CLI version doesn not show install globally by typing `sudo npm install gulp -g`

## Locals you need to set up:

* Create (`mkdir`) and/or move (`cd`) to your project folder
* Start version control by typing `git init`
* Create a git ignore file (`touch .gitignore`) that contains `node_modules/`
* run `npm init` on the terminal and follow the prompted questions
* run `npm install gulp --save` to save gulp as a dependency on the package.json file (check that it's there now).
    * You can delete the node_modules folder if you want, and then just reinstall by typing `npm install`, this download will be sensitive to your `package.json` file.
* Create `gulpfile.js` this file will contain the task functions that provide Gulp's functionality ().
    * Needs to start with `const gulp = require('gulp');`
    * Task functions need to be `async`:
    `gulp.task('styles', async function() {
    console.log('Starting styles task');});`