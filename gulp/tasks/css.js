import gulp from 'gulp';

import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import path from 'path';
import { loadConfig } from './config';

const { PATHS, TASKS } = loadConfig();

const cssPaths = {
  src: path.join(PATHS.src, PATHS.css, '/**/*.{' + TASKS.css.extensions + '}'),
  dest: path.join(PATHS.tmp, PATHS.css),
}

// Processors
const processorsDev = [
  autoprefixer
];

const processorsProd = [
  autoprefixer,
  cssnano
];

export function cssDev() {
  return gulp.src(cssPaths.src)
    .pipe(sass(TASKS.css.sass))
    .pipe(postcss(processorsDev))
    .pipe(gulp.dest(cssPaths.dest));
}

export function cssProd() {
  return gulp.src(cssPaths.src)
    .pipe(sass(TASKS.css.sass))
    .pipe(postcss(processorsProd))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssPaths.dest));
}
