import gulp from 'gulp';

import { serve, reload } from './serve';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revisionDev } from './revision';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

import path from 'path'
import { loadConfig } from './config';

const { PATHS, TASKS } = loadConfig();

const watchPaths = {
  css: path.join(PATHS.src, PATHS.css, '/**/*.{' + TASKS.css.extensions + '}'),
  js: path.join(PATHS.src, PATHS.js, '/**/*.{' + TASKS.js.extensions + '}'),
  images: (PATHS.src, PATHS.images, '/**/*.{' + TASKS.images.extensions + '}'),
}

export function watch(done) {
  // Content
  gulp.watch(['src/hugo/layouts/**/*', 'src/hugo/content/**/*', 'src/hugo/archetypes/**/*']).on("change", gulp.series(hugoDev, reload));

  // css
  gulp.watch(watchPaths.css, gulp.series(cssDev, hugoDelete, hugoDev, revisionDev, reload));

  // js
  gulp.watch(watchPaths.js, gulp.series(js, hugoDelete, hugoDev, revisionDev, reload));

  // Images
  gulp.watch(watchPaths.images, gulp.series(images, hugoDelete, hugoDev, revisionDev, reload));

  done();
}
