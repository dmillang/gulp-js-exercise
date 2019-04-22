const gulp = require('gulp');

// Default - just type 'gulp' to call
gulp.task('default', async function() {
    console.log('Starting default task')
});

// Styles - type 'gulp styles' to call
gulp.task('styles', async function() {
    console.log('Starting styles task');
});

// Scripts - type 'gulp scripts' to call
gulp.task('scripts', async function() {
    console.log('Starting scripts task');
});

// Images - type 'gulp images' to call
gulp.task('images', async function() {
    console.log('Starting images task');
});