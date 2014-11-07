// gulp.task(name[, deps], fn);

var gulp = require('gulp');
connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./Users/arielgonzalez/Desktop/app/*.*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./Users/arielgonzalez/Desktop/app/*.*'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
