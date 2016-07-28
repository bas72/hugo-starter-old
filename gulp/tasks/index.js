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

const src = '_src'
const siteRoot = 'public';
const hugoPath = src + '/hugo' + '/**/*'
const cssPath = src + '/css' + '/**/*'
const jsPath = src + '/js' + '/**/*'
const imgPath = src+ '/img' + '/**/*'

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
  gulp.watch(hugoPath, gulp.series(hugoDev));
  gulp.watch(cssPath, gulp.series(cssDev, hugoDelete, hugoDev, revisionDev));
  gulp.watch(jsPath, gulp.series(js, hugoDelete, hugoDev, revisionDev));
  gulp.watch(imgPath.images, gulp.series(images, hugoDelete, hugoDev, revisionDev));
  //gulp.watch(cssFiles, gulp.series(css));
  done();
}

// Default task
gulp.task(
  'default', gulp.series('dev')
);
