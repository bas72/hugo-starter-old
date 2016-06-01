import gulp from "gulp";
import yaml from 'js-yaml';
import fs from 'fs';

export function loadConfig() {
  let ymlFile = fs.readFileSync('gulp/config.yml', 'utf8');
  return yaml.load(ymlFile);
}
