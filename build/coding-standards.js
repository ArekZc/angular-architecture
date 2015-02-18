'use strict';

var gulp    = require('gulp');

// Registration tasks

/**
 * @namespace gulp.tasks
 * @name coding:standards
 * @description Check your code style to avoid obvious mistakes
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('coding:standards', codingStandardsTask);

// Implementation of tasks

var jshint  = require('gulp-jshint');

function codingStandardsTask() {

	return gulp.src([
        'src/**/*.js',
        'tests/**/*.js'
    ])
	  .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
}
