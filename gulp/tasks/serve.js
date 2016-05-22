import gulp from 'gulp';
import browserSync from 'browser-sync';
const server = browserSync.create();

export function reload(done) {
  server.reload();
  done();
}

export function serve(done) {
  server.init({
    server: {
      baseDir: './public/'
    }
  });
  done();
}
