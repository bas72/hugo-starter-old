import gulp from 'gulp';

import postcss from 'gulp-postcss';
import cssnano from 'cssnano';

// Processors
let processors = [
  cssnano
];

export function processStyles() {
  return gulp.src('assets/styles/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('staging/css'));
}
