import gulp from 'gulp';
import browserSync from 'browser-sync';

export function serve() {
    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "./public/"
        },
        open: false
    })
}

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    // gulp.watch(['hugo/layouts/**/*', 'hugo/content/**/*', 'hugo/archetypes/**/*'], ['buildContent')];
    // gulp.watch(['src/styles/*.scss', 'src/scripts/*.js', 'src/images/*.*'], ['buildDev']);
