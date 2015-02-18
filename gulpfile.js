'use strict';

var gulp = require('gulp');

require('require-dir')('./build');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});