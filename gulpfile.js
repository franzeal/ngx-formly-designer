'use strict';

var gulp = require('gulp');
var exec = require('child_process').execSync;
var sequence = require('gulp-sequence');
var strip = require('gulp-strip-comments');

gulp.task('run', function() {
    exec('lite-server --baseDir="dist"', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('build', function() {
    exec('ng build --aot --prod', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('strip', function () {
  return gulp.src('dist/*.js')
    .pipe(strip())
    .pipe(gulp.dest('dist'));
});

gulp.task('build:dist', sequence('build', 'strip'));
