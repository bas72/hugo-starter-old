## Todo

### Roadmap
1. Implement best bits for zurb foundation template: especially the yaml config (so much cleaner!) https://github.com/zurb/foundation-zurb-template/
2. Write a blog post documenting/sharing my workflow

### Minor
- [ ] Consider reimplementing .reload instead of browserSync files
- [ ] Extract postcss plugins to config file
- [ ] Setup gulp imagemin
- [ ] Finish replacing paths for config references
- [ ] Finish changing old var refs (eg. reload) to es6 imports
- [ ] Make a separate dev and prod js task which utilises sourcemaps etc

### Notes
- Possibly something wrong with .tmp - creating duplicates

### FAQ's
- No need for hugoDelete in watch tasks because only needs to be done once, and is performed at the start
