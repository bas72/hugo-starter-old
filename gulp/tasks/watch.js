import gulp from 'gulp';

import { serve, reload } from './serve';
import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revision } from './revision';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

import path from 'path'
import config from '../config.json'

const paths = {
  css: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  js: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
  images: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}')
}

export function watch(done) {
  // Content
  gulp.watch(['hugo/layouts/**/*', 'hugo/content/**/*', 'hugo/archetypes/**/*']).on("change", gulp.series(hugoDev, referenceContent, reload));

  // css
  gulp.watch(paths.css, gulp.series(cssDev, revision, hugoDelete, hugoDev, referenceAll, reload));

  // js
  gulp.watch(paths.js, gulp.series(js, revision, hugoDelete, hugoDev, referenceAll, reload));

  // Images
  gulp.watch(paths.images, gulp.series(images, revision, hugoDelete, hugoDev, referenceAll, reload));

  done();
}
