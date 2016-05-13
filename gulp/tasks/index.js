import gulp from 'gulp';

import config from '../config';

import { processStyles } from './styles';

gulp.task(
  'styles',
  gulp.parallel(processStyles)
);
const stylesTask = gulp.task('styles');
stylesTask.description = 'Pass through post-css';

// Default task
gulp.task(
  'default',
  gulp.series(
    'styles'
  )
);

const defaultTask = gulp.task('default');
defaultTask.description = 'Launch dev or prod default task.';
