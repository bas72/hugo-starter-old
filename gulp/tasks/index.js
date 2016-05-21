import gulp from 'gulp';

import config from '../config';

import { serve, reload } from './serve';
import { watch } from './watch';
import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revision } from './revision';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

// Singles
gulp.task(serve);
gulp.task(watch);
gulp.task(referenceContent);
gulp.task(referenceAll);
gulp.task(hugoDev);
gulp.task(hugoProd);
gulp.task(hugoDelete);
gulp.task(revision);
gulp.task(cssDev);
gulp.task(cssProd);
gulp.task(js);
gulp.task(images);

// Builds

//DONT include hugoDelete
gulp.task(
  'buildContent',
  gulp.series(hugoDev, referenceContent)
)

gulp.task(
  'buildDev',
  gulp.series(
    gulp.parallel(cssDev, js, images),
    'revision',
    'hugoDelete',
    'hugoDev',
    'referenceAll',
    //reload,
    gulp.parallel(serve, watch)
  )
);

gulp.task(
  'buildProd',
  gulp.series(
    gulp.parallel(cssProd, js, images),
    'revision',
    'hugoDelete',
    'hugoProd',
    'referenceAll',
    reload
  )
);

// Dev
gulp.task(
  'dev',
  gulp.series(
    'serve'
  )
);

// Production
gulp.task(
  'prod',
  gulp.series(
    'buildProd'
  )
);

// Default task
gulp.task(
  'default',
  gulp.series(
    'buildDev'
  )
);
