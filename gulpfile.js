'use strict';

var path = require('path');
var gulp = require('gulp');
var replace = require('gulp-replace');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js')
var rimraf = require('rimraf');
var _ = require('lodash');
var webpackDevServer = require('webpack-dev-server');

gulp.task('webpack:build', function(callback) {

  rimraf.sync(path.resolve('build'));

  var myConfig = Object.create(webpackConfig);
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);

    gutil.log("webpack:build", stats.toString({
	  colors: true
    }));

    callback();
  });
});

gulp.task('html', function(callback){
    gulp.src(path.resolve('src/index.html'))
    .pipe(replace('__CACHE_BUST__', Date.now()))
    .pipe(gulp.dest(path.resolve('build')));
    callback();
});

gulp.task('css', function(callback){
    gulp.src(path.resolve('src/css/*'))
    .pipe(gulp.dest(path.resolve('build/static')));
    callback();
});

gulp.task('default', ['webpack:build', 'html', 'css']);
