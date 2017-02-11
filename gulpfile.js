var gulp = require('gulp');

var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("styles/*.css", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['serve']);
