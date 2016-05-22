import gulp from 'gulp';

import config from '../config';

import { serve, reload } from './serve.js';
import { watch } from './watch.js';
import { referenceContent, referenceAll } from './reference.js';
import { hugoDev, hugoProd, hugoDelete } from './hugo.js';
import { revisionDev, revisionProd } from './revision.js';
import { cssDev, cssProd } from './css';
import { js } from './js.js';
import { images } from './images.js'

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
