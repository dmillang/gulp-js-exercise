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

## Add new plug into workflow

* Install it (i.e, `gulp uglify`) by adding it into dev dependencies or running `sudo npm install --save-dev gulp-uglify`
* Add it to the top of the `gulpfile.js` by giving it a name. For example, `var uglify = require('gulp-uglify');`
* Add it to the task, using `.pipe`. For example, `.pipe(uglify())`.
* If required, make it `return` to the `dist` folder at the end of the pipeline `.pipe(gulp.dest('public/dist'));`

## Add static server (npm static-server)

* `sudo npm install static-server --save` **(NOT on devDependencies `--save-dev`)**
* create `server.js` on project `root` folder
* Add the following in `server.js`:
```
var StaticServer = require('static-server');

var server = new StaticServer({
    rootPath: './public/',
    port: 3000
});

server.start(function() {
    console.log('Server started on port ' + server.port);
});
``` 
* To use run `node server.js` on terminal
    * While it's being used no other tasks can be performed on the terminal, close it by using `cntrl + c`

## Add gulp watch

* Gulp watch allows us to automatically update the files while working, so we don't have to call `gulp whatever-task` each time to update the files in the `dist` folder.

* Add task in gulpfile.js and set files to watch. This task does not require us create a dependency.
```
var SCRIPTS_PATH = 'public/scripts/**/*.js';

gulp.task('watch', function() {
    console.log('starting watch task');
    require('./server.js')
    gulp.watch(SCRIPTS_PATH, ['scripts']);
});
```

## Add gulp live reload

* Install live reload `sudo npm install gulp-livereload@3.8.1 --save-dev`
* define `var livereload = require('gulp-livereload');`
* add to task:
```
gulp.task('watch', function () {
	console.log('Starting watch task');
	require('./server.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
});
```
* Add script to end of `<body>` in `index.html` for live reload
`<script src="http://localhost:35729/livereload.js"></script>`