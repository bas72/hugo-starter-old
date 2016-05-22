import gulp from 'gulp';

import config from '../config';

import { serve, reload } from './serve';
import { watch } from './watch';
import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revision } from './revision';
import { revisionDev } from './revisionDev';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

// Builds
gulp.task(
  'dev',
  gulp.series(
    gulp.parallel(cssDev, js, images),
    revisionDev,
    hugoDelete,
    hugoDev,
    gulp.parallel(serve, watch)
  )
);

gulp.task(
  'prod',
  gulp.series(
    gulp.parallel(cssProd, js, images),
    revision,
    hugoDelete,
    hugoProd,
    referenceAll
  )
);

// Default task
gulp.task(
  'default', gulp.series('dev')
);
