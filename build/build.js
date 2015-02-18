'use strict';

var gulp        = require('gulp');
var constants   = require('./constants');

var rev         = require('gulp-rev');
var clean       = require('gulp-clean');
var flatten     = require('gulp-flatten');
var bowerFiles  = require('main-bower-files');
var runSequence = require('run-sequence').use(gulp);

// Registration tasks

/**
 * @namespace gulp.tasks
 * @name build:styles:vendor
 * @description Build vendor styles like bootstrap or foundation
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:styles:vendor', buildStylesVendorTask);

/**
 * @namespace gulp.tasks
 * @name build:styles:custom
 * @description Build custom created styles
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:styles:custom', ['build:styles:clean'], buildStylesCustomTask);

/**
 * @namespace gulp.tasks
 * @name build:styles:clean
 * @description Clean build directory from custom styles files
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:styles:clean', buildStylesCleanTask);

/**
 * @namespace gulp.tasks
 * @name build:scripts:vendor
 * @description Build vendor scripts like angular or jquery
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:scripts:vendor', buildScriptsVendorTask);

/**
 * @namespace gulp.tasks
 * @name build:scripts:custom
 * @description Build custom created scripts
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:scripts:custom', ['build:scripts:clean'], buildScriptsCustomTask);

/**
 * @namespace gulp.tasks
 * @name build:scripts:clean
 * @description Clean build directory from custom scripts files
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:scripts:clean', buildScriptsCleanTask);

/**
 * @namespace gulp.tasks
 * @name build:assets:images
 * @description Minify, revision images
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:assets:images', buildAssetsImagesTask);

/**
 * @namespace gulp.tasks
 * @name build:assets:icons
 * @description Build icon font based on svg files
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:assets:icons', buildAssetsIconsTask);

/**
 * @namespace gulp.tasks
 * @name build:templates:cache
 * @description Build angular template from html partials
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:templates:cache', buildTemplatesCacheTask);

/**
 * @namespace gulp.tasks
 * @name build:templates:compile
 * @description Compile dynamic templates to raw html version
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:templates:compile', buildTemplatesCompileTask);

/**
 * @namespace gulp.tasks
 * @name build:templates:clean
 * @description Clean build directory from templates files
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:templates:clean', buildTemplatesCleanTask);

/**
 * @namespace gulp.tasks
 * @name build:clean
 * @description Clean build directory
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:clean', buildCleanTask);

/**
 * @namespace gulp.tasks
 * @name build:others
 * @description Build other files like .htaccess, favicon...
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:others', buildOthersTask);

/**
 * @namespace gulp.tasks
 * @name build:inject
 * @description Inject scripts & styles to index.html
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build:inject', buildInjectTask);

/**
 * @namespace gulp.tasks
 * @name build
 * @description Build application
 *
 * @author Arek Zając <arekzc@gmail.com>
 */
gulp.task('build', buildTask);

// Implementation of tasks

var sass = require('gulp-sass');
var csso = require('gulp-csso');


function buildStylesVendorTask() {

  return gulp.src(constants.sourceDir + '/app/vendor.scss')
    .pipe(sass({style: 'expanded'}))
    .on('error', function (err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(csso())
    .pipe(gulp.dest(constants.destDir + '/app'));
}

function buildStylesCustomTask() {

  return gulp.src([
    constants.sourceDir + '/**/*.scss',
    '!' + constants.sourceDir + '/**/_*.scss',
    '!' + constants.sourceDir + '/app/vendor.scss'
  ])
    .pipe(sass({style: 'expanded'}))
    .on('error', function (err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(constants.destDir));
}

function buildStylesCleanTask() {

  return gulp.src(constants.destDir + '/app/app-*.css')
    .pipe(clean());
}

var uglify  = require('gulp-uglify');
var concat = require('gulp-concat');

function buildScriptsVendorTask() {

  return gulp.src(bowerFiles(), {base: 'bower_components'})
    .pipe(gulp.dest(constants.destDir + '/bower_components'));
}

function buildScriptsCustomTask() {

  return gulp.src([
    constants.sourceDir + '/**/*.js',
    '!' + constants.sourceDir + '/**/*.spec.js',
    '!' + constants.sourceDir + '/**/*.mock.js',
    '!' + constants.sourceDir + '/app/app-prod.js'
  ])
    .pipe(gulp.dest(constants.destDir));
}

function buildScriptsCleanTask() {

  return gulp.src([
    constants.destDir + '/**/*.js',
    '!' + constants.destDir + '/app/vendor-*.js'
  ])
    .pipe(clean());

}

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

function buildAssetsImagesTask() {

  return gulp.src(constants.sourceDir + '/app/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(constants.destDir + '/app/images'));

}

var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

function buildAssetsIconsTask() {

  var FONT_NAME = 'iconpro';

  return gulp.src(constants.sourceDir + '/app/icons/*.svg')
    .pipe(iconfont({
      fontName: FONT_NAME
    }))
    .on('codepoints', function(codepoints) {
      gulp.src('build/templates/icons.scss')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: FONT_NAME,
          fontPath: 'fonts/',
          className: 'icon'
        }))
        .pipe(gulp.dest(constants.sourceDir + '/app'));
    })
    .pipe(gulp.dest(constants.destDir + '/app/fonts'));
}

var jade = require('gulp-jade');

function buildTemplatesCompileTask() {

  return gulp.src([
    constants.sourceDir + '/**/*.jade',
    '!' + constants.sourceDir + '/**/cached/**/*.jade',
    '!' + constants.sourceDir + '/**/_*.jade'
  ])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(constants.destDir));
}

function buildTemplatesCacheTask() {

    return gulp.src([
       constants.sourceDir + '/**/cached/**/*.jade'
    ])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('.tmp'));
}

function buildTemplatesCleanTask() {

  return gulp.src(constants.destDir + '/**/*.html')
    .pipe(clean());
}

function buildCleanTask() {

  return gulp.src(constants.destDir)
    .pipe(clean());

}

var inject = require('gulp-inject');

function buildInjectTask() {

  var target = gulp.src(constants.destDir + '/index.html');

  var vendors = gulp.src(bowerFiles(), {read: false});

  var sources = gulp.src([
    constants.destDir + '/{app, modules}/**/*.js',
    constants.destDir + '/**/*.css'
  ], {read: false});

  return target
    .pipe(inject(vendors, {name: 'vendors'}))
    .pipe(inject(sources, {relative: true, addRootSlash: true}))
    .pipe(gulp.dest(constants.destDir));
}

function buildOthersTask() {

  return gulp.src([
    constants.sourceDir + '/**/*.ico',
    constants.sourceDir + '/app/.htaccess'
  ])
    .pipe(gulp.dest(constants.destDir));

}

function buildTask(callback) {
  runSequence(
    'build:clean',
    [
      'build:styles:vendor',
      'build:scripts:vendor',
      'build:styles:custom',
      'build:scripts:custom',
      'build:assets:images',
      'build:assets:icons',
      'build:templates:compile',
      'build:others'
    ],
    'build:inject',
    callback
  );
}
