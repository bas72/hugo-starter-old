import gulp from 'gulp';
import rev from 'gulp-rev';
import del from 'rev-del';

import path from 'path'
import config from '../config.json'

const taskPaths = {
  css: path.join(config.PATHS.tmp, config.PATHS.css, '/**/*.{' + config.TASKS.css.extensions + '}'),
  js: path.join(config.PATHS.tmp, config.PATHS.js, '/**/*.{' + config.TASKS.js.extensions + '}'),
  images: path.join(config.PATHS.tmp, config.PATHS.images, '/**/*.{' + config.TASKS.images.extensions + '}')
}

export function revisionDev() {
    return gulp.src([taskPaths.css, taskPaths.js, taskPaths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(gulp.dest(config.PATHS.dest));
}

export function revisionProd() {
    return gulp.src([taskPaths.css, taskPaths.js, taskPaths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(rev())
        .pipe(gulp.dest(config.PATHS.dest))
        .pipe(rev.manifest())
        .pipe(del({dest: config.PATHS.dest}))
        .pipe(gulp.dest(config.PATHS.dest));
}
