import gulp from 'gulp';

import { serve, reload } from './serve';
import { watch } from './watch';
import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revisionDev, revisionProd } from './revision';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

// Builds
gulp.task(
  'dev',
  gulp.series(
    gulp.parallel(cssDev, js, images),
    hugoDelete,
    hugoDev,
    revisionDev,
    gulp.parallel(serve, watch)
  )
);

gulp.task(
  'prod',
  gulp.series(
    gulp.parallel(cssProd, js, images),
    hugoDelete,
    hugoProd,
    revisionProd,
    referenceAll
  )
);

// Default task
gulp.task(
  'default', gulp.series('dev')
);
