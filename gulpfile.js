'use strict';

var path = require('path');
var gulp = require('gulp');
var replace = require('gulp-replace');
var gutil = require('gulp-util');
var symlink = require('gulp-sym');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js')
var rimraf = require('rimraf');
var _ = require('lodash');
var webpackDevServer = require('webpack-dev-server');

gulp.task('build', function(callback) {

  rimraf.sync(path.resolve('build'));

  var myConfig = Object.create(webpackConfig);

  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("build", err);

    gutil.log("build", stats.toString({
	  colors: true
    }));
  });

  gulp.src('src/index.html')
    .pipe(replace('__CACHE_BUST__', Date.now()))
    .pipe(gulp.dest('build'));

  gulp.src('src/config.yaml')
    .pipe(gulp.dest('build'))

  // gulp.src('src/css/*')
  //   .pipe(gulp.dest('build/static'));

  callback();
});

gulp.task('default', ['build']);
