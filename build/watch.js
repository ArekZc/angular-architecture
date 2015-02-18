'use strict';

var gulp        = require('gulp');
var constants   = require('./constants');

// Registration tasks

/**
 * @namespace gulp.tasks
 * @name watch:styles:custom
 * @description Watch custom styles for changes
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('watch:styles:custom', watchStylesCustomTask);

/**
 * @namespace gulp.tasks
 * @name watch:styles:vendor
 * @description Watch vendor styles for changes
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('watch:styles:vendor', watchStylesVendorTask);

/**
 * @namespace gulp.tasks
 * @name watch:templates
 * @description Watch templates for changes
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('watch:templates', watchTemplatesTask);

/**
 * @namespace gulp.tasks
 * @name watch:scripts
 * @description Watch scripts for changes
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('watch:scripts', watchScriptsTask);

/**
 * @namespace gulp.tasks
 * @name watch:images
 * @description Watch images for changes
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('watch:images', watchImagesTask);

/**
 * @namespace gulp.tasks
 * @name watch:icons
 * @description Watch icons for changes
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('watch:icons', watchIconsTask);

gulp.task('watch', [
  'watch:styles:custom',
  'watch:styles:vendor',
  'watch:templates',
  'watch:scripts'
]);

// Implementation of tasks

function watchStylesCustomTask() {

  gulp.watch(
    [
      constants.sourceDir + '/**/*.scss',
      '!' + constants.sourceDir + '/app/vendor.scss'
    ],
    ['build:styles:custom']
  );
}

function watchStylesVendorTask() {

  gulp.watch(
    [constants.sourceDir + '/app/vendor.scss'],
    ['build:styles:vendor']
  );
}

function watchTemplatesTask() {

  gulp.watch(
    [
        constants.sourceDir + '/**/*.jade',
        '!' + constants.sourceDir + '/**/cached/**/*.jade'
    ],
    ['build:templates:compile']
  );
}

function watchScriptsTask() {

  gulp.watch(
    [constants.sourceDir + '/**/*.js'],
    ['build:scripts:custom']
  );
}

function watchImagesTask() {

  gulp.watch(
    [constants.sourceDir + '/app/images/*'],
    ['build:assets:images']
  );

}

function watchIconsTask() {

  gulp.watch(
    [constants.sourceDir + '/app/icons/*'],
    ['build:assets:icons']
  );
}
