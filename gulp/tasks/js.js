import gulp from 'gulp';
import jshint from 'gulp-jshint';
import uglify from 'gulp-uglify';

import path from 'path'
import config from '../config.json'

const paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
  dest: path.join(config.root.tmp, config.tasks.js.dest)
}

export function js() {
    return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest));
}
