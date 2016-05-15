import gulp from 'gulp';

import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'path'

import config from '../config.json'

const paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

// Processors
const processorsDev = [
  autoprefixer
];

const processorsProd = [
  autoprefixer,
  cssnano
];

export function stylesDev() {
  return gulp.src(paths.src)
    .pipe(sass(config.tasks.css.sass))
    .pipe(postcss(processorsDev))
    .pipe(gulp.dest(paths.dest));
}

export function stylesProd() {
  return gulp.src(paths.src)
    .pipe(sass(config.tasks.css.sass))
    .pipe(postcss(processorsProd))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest));
}

// var cssTask = function () {
//   return gulp.src(paths.src)
//     .pipe(gulpif(!global.production, sourcemaps.init()))
//     .pipe(sass(config.tasks.css.sass))
//     .on('error', handleErrors)
//     .pipe(autoprefixer(config.tasks.css.autoprefixer))
//     .pipe(gulpif(global.production, cssnano({autoprefixer: false})))
//     .pipe(gulpif(!global.production, sourcemaps.write()))
//     .pipe(gulp.dest(paths.dest))
//     .pipe(browserSync.stream())
