import gulp from 'gulp';
const browserSync = require('browser-sync').create();

import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revisionDev, revisionProd } from './revision';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

import path from 'path'
import { loadConfig } from './config';
const { PATHS, TASKS } = loadConfig();

// const hugoPath = path.join(PATHS.src, PATHS.hugo, '/**/*');
// const cssPath = path.join(PATHS.src, PATHS.css, '/**/*');
// const jsPath = path.join(PATHS.src, PATHS.js, '/**/*');
// const imgPath = {path.join(PATHS.src, PATHS.img, '/**/*');

gulp.task(
  'dev',
  gulp.series(
    gulp.parallel(cssDev, js, images),
    gulp.series(hugoDelete, hugoProd),
    revisionDev,
    serve
  )
);

gulp.task(
  'assetsStep',
  gulp.series(
    gulp.parallel(cssProd, js, images)
  )
);
gulp.task(
  'hugoStep',
  gulp.series(
    hugoDelete, hugoProd
  )
);
gulp.task(
  'referenceStep',
  gulp.series(
    revisionProd, referenceAll
  )
);

//Serve + Watch
function serve(done) {
  browserSync.init({
    files: [PATHS.dest + '/**'],
    server: {
      baseDir: PATHS.dest
    }
  });
  gulp.watch(path.join(PATHS.src, PATHS.hugo, '/**/*'), gulp.series(hugoDev));
  gulp.watch(path.join(PATHS.src, PATHS.css, '/**/*'), gulp.series(cssDev, hugoDelete, hugoDev, revisionDev));
  gulp.watch(path.join(PATHS.src, PATHS.js, '/**/*'), gulp.series(js, hugoDelete, hugoDev, revisionDev));
  gulp.watch(path.join(PATHS.src, PATHS.images, '/**/*'), gulp.series(images, hugoDelete, hugoDev, revisionDev));
  done();
}

// Default task
gulp.task(
  'default', gulp.series('dev')
);
