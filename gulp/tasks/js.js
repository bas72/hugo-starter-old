import gulp from 'gulp';
import jshint from 'gulp-jshint';
import uglify from 'gulp-uglify';

import path from 'path'
import config from '../config.json'

const taskPaths = {
  src: path.join(config.PATHS.src, config.PATHS.js, '/**/*.{' + config.TASKS.js.extensions + '}'),
  dest: path.join(config.PATHS.tmp, config.PATHS.js)
}

export function js() {
    return gulp.src(taskPaths.src)
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(uglify())
        .pipe(gulp.dest(taskPaths.dest));
}
