import gulp from 'gulp';

import { serve, reload } from './serve';
//import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
// import { revision } from './revision';
import { revisionDev } from './revision';
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
  gulp.watch(['src/hugo/layouts/**/*', 'src/hugo/content/**/*', 'src/hugo/archetypes/**/*']).on("change", gulp.series(hugoDev, reload));

  // css
  gulp.watch(paths.css, gulp.series(cssDev, hugoDelete, hugoDev, revisionDev, reload));

  // js
  gulp.watch(paths.js, gulp.series(js, hugoDelete, hugoDev, revisionDev, reload));

  // Images
  gulp.watch(paths.images, gulp.series(images, hugoDelete, hugoDev, revisionDev, reload));

  done();
}
