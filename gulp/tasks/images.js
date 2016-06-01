import gulp           from 'gulp';
import imagemin       from 'gulp-imagemin';
import changed        from 'gulp-changed';

import path           from 'path'
import { loadConfig } from './config';

const { PATHS, TASKS } = loadConfig();

const imgPaths = {
  src: path.join(PATHS.src, PATHS.images, '/**/*.{' + TASKS.images.extensions + '}'),
  dest: path.join(PATHS.tmp, PATHS.images),
}

export function images() {
  return gulp.src(imgPaths.src)
    .pipe(changed(imgPaths.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(imgPaths.dest));
}
