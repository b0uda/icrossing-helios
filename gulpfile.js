var gulp = require('gulp');
var server = require('gulp-server-livereload');
 var sass = require('gulp-sass');
 
gulp.task('webserver', function() {
  gulp.src('./../icrossing-helios-base/')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('sass', function () {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});
 
gulp.task('watch', function () {
	 gulp.src('./../icrossing-helios-base/')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
  gulp.watch('./assets/sass/*.scss', ['sass']);
});