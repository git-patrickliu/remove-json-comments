var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    index = require('./index');


gulp.task('mocha', function() {
    return gulp.src('test/main.js')
    .pipe(mocha());
});

gulp.task('default', ['mocha']);
