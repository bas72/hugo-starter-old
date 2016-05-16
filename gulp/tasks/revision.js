import gulp from 'gulp';
import rev from 'gulp-rev';
import del from 'rev-del';

import path from 'path'
import config from '../config.json'

const paths = {
  css: path.join(config.root.tmp, config.tasks.css.dest, '/**/*.{' + config.tasks.css.extensions + '}'),
  js: path.join(config.root.tmp, config.tasks.js.dest, '/**/*.{' + config.tasks.js.extensions + '}'),
  images: path.join(config.root.tmp, config.tasks.images.dest, '/**/*.{' + config.tasks.images.extensions + '}')
}

//gulp.task('revision', ['styles','scripts', 'images', 'svg'], function() {
export function revision() {
    return gulp.src([paths.css, paths.js, paths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(rev())
        .pipe(gulp.dest('hugo/static'))
        .pipe(rev.manifest())
        .pipe(del({dest: 'hugo/static'}))
        .pipe(gulp.dest('hugo/static'));
}
