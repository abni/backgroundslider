/*jshint globalstrict: true*/
/*global require*/
'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');

gulp.task('default', ['scss', 'compress', 'copy', 'watch']);

gulp.task('scss', function () {
    gulp.src('./backgroundslider.scss')
        .pipe(sass())
        .pipe(minifycss({keepBreaks:true}))
        .pipe(concat('backgroundslider.css'))
        .pipe(gulp.dest('./dist/'))
    ;
});

gulp.task('compress', function() {
    gulp.src('backgroundslider.js')
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('copy', function() {
    gulp.src('backgroundslider.html')
        .pipe(gulp.dest('./dist/'))
});

var livereloadFiles = [
    'backgroundslider.css',
    'backgroundslider.js',
    '*.html'
];

gulp.task('watch', function () {
    var server = livereload();
    gulp.watch('backgroundslider.scss', ['scss']);
    gulp.watch('backgroundslider.js', ['compress']);
    gulp.watch(livereloadFiles, function (file) {
        server.changed(file.path);
    });
});
