import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';

import path from 'path'
import config from '../config.json'

const paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
  dest: path.join(config.root.tmp, config.tasks.images.dest)
}

export function images() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dest));
}
