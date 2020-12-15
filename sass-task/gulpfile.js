const gulp = require('gulp');
const sass = require('gulp-sass');

/**
 * outputStyle: Expanded, compressed
 */
function css() {
    return gulp.src('./scss/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest('./dist/css'));
}

gulp.task('css', css);
