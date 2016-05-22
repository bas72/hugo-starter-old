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

export function revisionDev() {
    return gulp.src([paths.css, paths.js, paths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(gulp.dest('public'));
}

export function revisionProd() {
    return gulp.src([paths.css, paths.js, paths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(rev())
        .pipe(gulp.dest('public'))
        .pipe(rev.manifest())
        .pipe(del({dest: 'public'}))
        .pipe(gulp.dest('public'));
}
