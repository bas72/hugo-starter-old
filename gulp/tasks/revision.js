import gulp from 'gulp';
import rev from 'gulp-rev';
import del from 'rev-del';

import path from 'path'
import { loadConfig } from './config';
const { PATHS, TASKS } = loadConfig();

const taskPaths = {
  css: path.join(PATHS.tmp, PATHS.css, '/**/*.{' + TASKS.css.extensions + '}'),
  js: path.join(PATHS.tmp, PATHS.js, '/**/*.{' + TASKS.js.extensions + '}'),
  images: path.join(PATHS.tmp, PATHS.images, '/**/*.{' + TASKS.images.extensions + '}')
}

export function revisionDev() {
    return gulp.src([taskPaths.css, taskPaths.js, taskPaths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(gulp.dest(PATHS.dest));
}

export function revisionProd() {
    return gulp.src([taskPaths.css, taskPaths.js, taskPaths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(rev())
        .pipe(gulp.dest(PATHS.dest))
        .pipe(rev.manifest())
        .pipe(del({dest: PATHS.dest}))
        .pipe(gulp.dest(PATHS.dest));
}
