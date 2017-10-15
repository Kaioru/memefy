const gulp = require('gulp');
const browserify = require('gulp-browserify');
const pkg = require('./package.json')

gulp.task('build', () =>
  gulp.src(pkg.main)
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('default', ['build']);
