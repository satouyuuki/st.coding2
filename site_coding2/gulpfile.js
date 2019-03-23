const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('./css/styles.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', (done) => {
  gulp.src('./img/*.{png,jpg}')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
  done();
});
gulp.task('default', gulp.series(gulp.parallel('minify-css', 'img'), (done) => {
  done();
}));
