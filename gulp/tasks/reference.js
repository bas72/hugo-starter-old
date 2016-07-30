import gulp from 'gulp';
import replace from 'gulp-rev-replace';
import size from 'gulp-size';

import path from 'path'
import { loadConfig } from './config';
const { PATHS, TASKS } = loadConfig();

export function referenceContent() {
    // let manifest = gulp.src('dist/rev-manifest.json');
    let manifest = gulp.src(PATHS.dest +  '/rev-manifest.json');

    return gulp.src(['dist/**/*.html', 'dist/**/*.xml', 'dist/**/*.css'])
        .pipe(replace({manifest: manifest}))
        .pipe(size())
        .pipe(gulp.dest(PATHS.dest));
}

export function referenceAll() {
    // let manifest = gulp.src('dist/rev-manifest.json');
    let manifest = gulp.src(PATHS.dest + '/rev-manifest.json');

    return gulp.src(['dist/**/*.html', 'dist/**/*.xml', 'dist/**/*.css'])
        .pipe(replace({manifest: manifest, replaceInExtensions: ['.html', '.xml', '.css']}))
        .pipe(size())
        .pipe(gulp.dest(PATHS.dest));
}
