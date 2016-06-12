var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('hello', function() {
  console.log('Hello Alfred');
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});
