import gulp from 'gulp';
import jshint from 'gulp-jshint';
import uglify from 'gulp-uglify';

import path from 'path'
import { loadConfig } from './config';

const { PATHS, TASKS } = loadConfig();

const jsPaths = {
  src: path.join(PATHS.src, PATHS.js, '/**/*.{' + TASKS.js.extensions + '}'),
  dest: path.join(PATHS.tmp, PATHS.js),
}

export function js() {
    return gulp.src(jsPaths.src)
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(uglify())
        .pipe(gulp.dest(jsPaths.dest));
}
