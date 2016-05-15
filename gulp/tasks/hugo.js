// var gulp = require('gulp');

// var gutil = require('gulp-util');
// var path = require('path');
// var del = require('del');

import gulp from 'gulp';
// import exec from ('child_process').execSync;
var exec = require('child_process').execSync;
import gutil from 'gulp-util';
import path from 'path';
import del from 'del';

function hugo(drafts) {
    var src = path.join(process.cwd(), 'hugo');
    var dst = path.join(process.cwd(), 'public');

    gutil.log('src: ' + src + ' dst: ' + dst);

    var cmd = 'hugo --config=hugo/config.yaml -s ' + src + ' -d ' + dst;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

// gulp.task('hugo:draft', function() {
//     hugo(true);
// });

// gulp.task('hugo:all', ['hugo:delete'], function() {
export function hugoAll(done) {
    hugo(true);
    done();
}

//gulp.task('hugo:delete', function(done) {
export function hugoDelete(done) {
    var dst1 = path.join(process.cwd(), 'public');
    var dst2 = path.join(process.cwd(), 'hugo', 'public');
    del.sync(dst1);
    del.sync(dst2);
    done();
}

// gulp.task('hugo:live', ['hugo:delete'], function() {
// export function hugoProd(done) {
//     hugo(false);
//     done();
// });

// gulp.task('hugo:live', ['hugo:delete'], function() {
//     hugo(false);
// });
