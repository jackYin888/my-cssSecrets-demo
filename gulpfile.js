var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

gulp.task('browser-sync', function() {
    browserSync.init(['*.*'], {
        server: "./"

    });
    gulp.watch("**").on('change', browserSync.reload);
});
gulp.task('default', ['browser-sync']);
