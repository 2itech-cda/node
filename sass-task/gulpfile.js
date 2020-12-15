const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

/**
 * outputStyle: Expanded, compressed
 */
function css() {
    return gulp.src('./scss/**/*.scss')            // Source des fichiers à traiter
            .pipe(plumber())                       // Previent les erreurs
            .pipe(sass({outputStyle: 'expanded'})) // .on('error', sass.logError))
            .pipe(postcss([autoprefixer]))         // ::-moz-placeholder
            .pipe(gulp.dest('./dist/css'))         // sauvegarde du css normal
            .pipe(rename({suffix: '.min'}))        // main.min.css
            .pipe(postcss([cssnano]))              // minification du css
            .pipe(gulp.dest('./dist/css'));        // sauvegarde du css autopréfixé et compressé
}

function js() {
    // gulp-concat
    // gulp-uglify

    return gulp.src('./src/**/*.js')
            .pipe(gulp.dest('./dist/js'));
}

function watcher() {
    gulp.watch('./scss/**/*.scss', css);
}

gulp.task('css', done => {
    css();
    done();
});

gulp.task('watch', gulp.parallel(watcher));
