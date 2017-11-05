const gulp = require('gulp');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const pkg = require('./package.json');

gulp.task('build', () => {
  var b = browserify({
    standalone: 'memefy',
    entries: [pkg.main],
    debug: !gulp.env.production
  });

  return b.bundle()
    .pipe(source(pkg.main))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(rename(function(path) {
      path.basename = pkg.name;
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
