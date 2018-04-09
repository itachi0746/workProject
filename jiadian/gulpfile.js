var gulp = require('gulp'),
    // sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer');
    // minifycss = require('gulp-minify-css'),
    // jshint = require('gulp-jshint'),
    // uglify = require('gulp-uglify'),
    // imagemin = require('gulp-imagemin'),
    // rename = require('gulp-rename'),
    // concat = require('gulp-concat'),
    // notify = require('gulp-notify'),
    // cache = require('gulp-cache'),
    // del = require('del');

gulp.task('styles', function() {
  return gulp.src('css/index.css')
    // .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'ie 8'))
    .pipe(gulp.dest('css'))
    console.log('ok');
    // .pipe(rename({suffix: '.min'}))
    // .pipe(minifycss())
    // .pipe(gulp.dest('css'))
    // .pipe(notify({ message: 'Styles task complete' }));
});

