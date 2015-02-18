'use strict';

var gulp         = require('gulp'),
    protractor   = require('gulp-protractor');

// Registration tasks

/**
 * @namespace gulp.tasks
 * @name webdriver:update
 * @description update existing selenium webdriver
 */
gulp.task('webdriver:update', protractor.webdriver_update);

/**
 * @namespace gulp.tasks
 * @name webdriver:standalone
 * @description download selenium webdriver
 */
gulp.task('webdriver:standalone', protractor.webdriver_standalone);

/**
 * @namespace gulp.tasks
 * @name tests:e2e
 * @description run e2e tests
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('tests:e2e', ['webdriver-update'], protractorTask);

// Implementation of tasks

var browserSync = require('browser-sync');

function protractorTask() {

  var testFiles = [
    'tests/e2e/**/*.js'
  ];

  gulp.src(testFiles)
    .pipe(protractor.protractor({
      configFile: 'protractor.conf.js'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}