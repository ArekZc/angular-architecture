'use strict';

var gulp = require('gulp');

// Registration tasks

/**
 * @namespace gulp.tasks
 * @name server:develop:run
 * @description Run developer version server
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('server:develop:run', ['build', 'watch'], developServerRunTask);

/**
 * @namespace gulp.tasks
 * @name server:e2e:run
 * @description Run testing version server
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('server:e2e:run', testingServerRunTask);

// Implementation of tasks

function developServerRunTask() {
  browserSyncInit('.dist');
}

function testingServerRunTask() {
  browserSyncInit('.dist');
}

var browserSync = require('browser-sync');

function browserSyncInit(baseDir) {
  browserSync({
    server: {
      baseDir: baseDir
    }
  });

}

