import gulp from 'gulp';
var exec = require('child_process').execSync;
import gutil from 'gulp-util';
import del from 'del';

import path from 'path'
import { loadConfig } from './config';
const { PATHS, TASKS } = loadConfig();

function hugo(drafts) {
    var src = path.join(process.cwd(), PATHS.hugo);
    var dst = path.join(process.cwd(), PATHS.dest);

    gutil.log('src: ' + src + ' dst: ' + dst);

    var cmd = 'hugo --config=src/hugo/config.yaml -s ' + src + ' -d ' + dst;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

export function hugoDev(done) {
    hugo(true);
    done();
}

export function hugoDelete(done) {
    var dst1 = path.join(process.cwd(), PATHS.dest);
    var dst2 = path.join(process.cwd(), PATHS.hugo, PATHS.dest);
    del.sync(dst1);
    del.sync(dst2);
    done();
}

export function hugoProd(done) {
    hugo(false);
    done();
}
