import gulp from 'gulp';

import config from '../config';

import { hugoAll, hugoDelete } from './hugo';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

// Singles
gulp.task(hugoAll);
gulp.task(hugoDelete);
gulp.task(cssDev);
gulp.task(cssProd);
gulp.task(js);
gulp.task(images);

// Dev
gulp.task(
  'dev',
  gulp.series(
    gulp.parallel(cssDev, js, images),
    'hugoDelete',
    'hugoAll'
  )
);

// Production
gulp.task(
  'prod',
  gulp.series(
    gulp.parallel(cssProd, js, images),
    'hugoAll'
  )
);

// Default task
gulp.task(
  'default',
  gulp.series(
    'dev'
  )
);
