const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('styles.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('less', 'watch'));