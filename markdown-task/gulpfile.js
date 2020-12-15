const gulp = require('gulp');
const markdown = require('gulp-markdown');
const docPath = './doc/**/*.md';

gulp.task('hello', done => {
    console.log('Hello Gulp');
    done();
});

function markdownTask() {
    return gulp.src(docPath)
        .pipe(markdown())
        .pipe(gulp.dest('book'));
}

function watcher() {
    gulp.watch(docPath, markdownTask);
}

gulp.task('markdown', done => {
    markdownTask();
    done();
});

gulp.task('watcher', gulp.parallel(watcher));