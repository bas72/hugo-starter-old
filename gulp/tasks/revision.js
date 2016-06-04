import gulp from 'gulp';
import rev from 'gulp-rev';
import del from 'rev-del';

import path from 'path'
// import config from '../config.json'
import { loadConfig } from './config';

const { PATHS, TASKS } = loadConfig();

const revPaths = {
  css: path.join(PATHS.tmp, PATHS.css, '/**/*.{' + TASKS.css.extensions + '}'),
  js: path.join(PATHS.tmp, PATHS.css, '/**/*.{' + TASKS.js.extensions + '}'),
  images: path.join(PATHS.tmp, PATHS.images, '/**/*.{' + TASKS.images.extensions + '}'),
}

export function revisionDev() {
    return gulp.src([revPaths.css, revPaths.js, revPaths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(gulp.dest(PATHS.dest));
}

export function revisionProd() {
    return gulp.src([revPaths.css, revPaths.js, revPaths.images], {base: path.join(process.cwd(), '.tmp')})
        .pipe(rev())
        .pipe(gulp.dest(PATHS.dest))
        .pipe(rev.manifest())
        .pipe(del({dest: PATHS.dest}))
        .pipe(gulp.dest(PATHS.dest));
}
