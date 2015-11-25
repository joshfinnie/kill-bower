var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
 
// Basic usage 
gulp.task('scripts', function() {
    // Single entry point to browserify 
    gulp.src('./src/third-party-apps.js')
        .pipe(browserify({
          insertGlobals : true,
        }))
        .pipe(uglify())
        .pipe(rename('vendors.min.js'))
        .pipe(gulp.dest('./lib/'))
});
