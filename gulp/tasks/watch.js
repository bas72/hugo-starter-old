import gulp from 'gulp';

import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revision } from './revision';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

var reload = require("browser-sync").reload;

export function watch(done) {
  // Content
  gulp.watch(['hugo/layouts/**/*', 'hugo/content/**/*', 'hugo/archetypes/**/*'], gulp.series(referenceContent, hugoDev, reload));

  // css
  gulp.watch('src/styles/*.scss', gulp.series(cssDev, revision, hugoDelete, hugoDev, referenceAll, reload));

  // js
  gulp.watch('src/scripts/*.js', gulp.series(js, revision, hugoDelete, hugoDev, referenceAll, reload));

  // Images
  gulp.watch('src/images/*.*', gulp.series(images, revision, hugoDelete, hugoDev, referenceAll, reload));
  
  done();
}
