var gulp = require('gulp');
var server = require('gulp-server-livereload');
 
gulp.task('webserver', function() {
  gulp.src('./../html5up-helios 2/')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});