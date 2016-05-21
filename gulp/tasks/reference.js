import gulp from 'gulp';
import replace from 'gulp-rev-replace';
import size from 'gulp-size';

import path from 'path'
import config from '../config.json'

export function referenceContent() {
    let manifest = gulp.src('public/rev-manifest.json');

    return gulp.src(['public/**/*.html', 'public/**/*.xml', 'public/**/*.css'])
        .pipe(replace({manifest: manifest}))
        .pipe(size())
        .pipe(gulp.dest('public'));
}

export function referenceAll() {
    let manifest = gulp.src('public/rev-manifest.json');

    return gulp.src(['public/**/*.html', 'public/**/*.xml', 'public/**/*.css'])
        .pipe(replace({manifest: manifest, replaceInExtensions: ['.html', '.xml', '.css']}))
        .pipe(size())
        .pipe(gulp.dest('public'));
}
