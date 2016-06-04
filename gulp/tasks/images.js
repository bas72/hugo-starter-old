import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';

import path from 'path'
import config from '../config.json'

const taskPaths = {
  src: path.join(config.PATHS.src, config.PATHS.images, '/**/*.{' + config.TASKS.images.extensions + '}'),
  dest: path.join(config.PATHS.tmp, config.PATHS.images)
}

export function images() {
  return gulp.src(taskPaths.src)
    .pipe(changed(taskPaths.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(taskPaths.dest));
}
