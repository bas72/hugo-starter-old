import gulp from 'gulp';
const browserSync = require('browser-sync').create();

import { serve, reload } from './serve';
import { watch } from './watch';
import { referenceContent, referenceAll } from './reference';
import { hugoDev, hugoProd, hugoDelete } from './hugo';
import { revisionDev, revisionProd } from './revision';
import { cssDev, cssProd } from './css';
import { js } from './js';
import { images } from './images'

const src = '_src'
const siteRoot = 'public';
const hugoPath = src + 'hugo' + '/**/*'
const cssPath = src + 'css' + '/**/*'
const jsPath = src + 'js' + '/**/*'
const imgPath = src+ 'img' + '/**/*'

// Builds
gulp.task(
  'dev',
  gulp.series(
    gulp.parallel(cssDev, js, images),
    hugoDelete,
    hugoDev,
    revisionDev,
    // gulp.parallel(serve, watch)
    serveNew
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

function serveNew(done) {
  browserSync.init({
    files: [siteRoot + '/**'],
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(['src/hugo/layouts/**/*', 'src/hugo/content/**/*', 'src/hugo/archetypes/**/*']).on("change", gulp.series(hugoDev, reload));
  gulp.watch(cssPath, gulp.series(cssDev, hugoDelete, hugoDev, revisionDev, reload));
  gulp.watch(jsPath, gulp.series(js, hugoDelete, hugoDev, revisionDev, reload));
  gulp.watch(imgPath.images, gulp.series(images, hugoDelete, hugoDev, revisionDev, reload));
  //gulp.watch(cssFiles, gulp.series(css));
  done();
}

// Default task
gulp.task(
  'default', gulp.series('dev')
);
