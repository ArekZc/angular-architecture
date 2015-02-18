'use strict';

var gulp = require('gulp');

// Registration tasks

/**
 * @namespace gulp.tasks
 * @name test:unit
 * @description Run unit tests
 */
gulp.task('tests:unit', unitTestTask);

// Implementation of tasks

var wiredep = require('wiredep'),
    karma = require('gulp-karma');

function unitTestTask() {

    var bowerDeps = wiredep({
        dependencies: true,
        devDependencies: true
    });

    var testFiles = bowerDeps.js.concat([
        'src/app/app.js',
        'src/app/app-dev.js',
        'src/app/modules/**/*.js',
        'src/modules/**/*.js',
        'src/**/*.spec.js',
        'src/**/*.mock.js'
    ]);

    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            throw err;
        });
}
