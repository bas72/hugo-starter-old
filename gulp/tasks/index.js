import gulp from 'gulp';

import config from '../config';

import { stylesDev } from './styles';
import { stylesProd } from './styles';

gulp.task(
  'stylesDev',
  gulp.series(stylesDev)
);

gulp.task(
  'stylesProd',
  gulp.series(stylesProd)
);

// Dev
gulp.task(
  'dev',
  gulp.series(
    'stylesDev'
  )
);

// Production
gulp.task(
  'prod',
  gulp.series(
    'stylesProd'
  )
);

// Default task
gulp.task(
  'default',
  gulp.series(
    'dev'
  )
);
