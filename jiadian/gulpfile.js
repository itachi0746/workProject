// let gulp = require('gulp'),
//     // sass = require('gulp-ruby-sass'),
//     autoprefixer = require('gulp-autoprefixer'),
//     minifycss = require('gulp-clean-css'),
//     // jshint = require('gulp-jshint'),
//     // uglify = require('gulp-uglify'),
//     // imagemin = require('gulp-imagemin'),
//     rename = require('gulp-rename'),
//     // concat = require('gulp-concat'),
//     notify = require('gulp-notify');
//     // cache = require('gulp-cache'),
//     // del = require('del');

// gulp.task('styles', function() {
//   return gulp.src('src/css/*.css')
//     // .pipe(sass({ style: 'expanded' }))
//     // .pipe(autoprefixer('last 2 version', 'ie 8'))
//     // .pipe(gulp.dest('dist/css/'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('dist/css/'))
//     .pipe(notify({ message: 'Styles task complete' }));
// });

var config = {
    src: "src",
    dest: "dist"
}

var gulp        = require('gulp'),
	clean        = require('gulp-clean'),
	autoprefixer = require('gulp-autoprefixer'),
    minifyCss   = require('gulp-clean-css'),
    pump        = require('pump'),
    changed      = require('gulp-changed'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    runSequence  = require('run-sequence'),
    rename 		= require('gulp-rename');


// 清理目标目录
gulp.task('clean', function(cb) {
    pump([
        gulp.src(config.dest),
        clean()
    ], cb)
});
// 压缩css,加前缀,重命名
gulp.task('mincss', [], function(cb) {
    pump([
        gulp.src(['src/css/*.css','!src/css/*.min.css']),
        autoprefixer('last 2 version'),
        rename({suffix: '.min'}),
        minifyCss(
            {keepSpecialComments: '*'}
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀        	
        	),
        gulp.dest('dist/css/')
    ], cb
    )
});

 // 执行JS压缩
gulp.task('minjs', [], function(cb) {
    pump([
        // 获取原目录下所有的js文件
        gulp.src(config.src + "/**/*.js"),
        // 执行更名操作
        rename({ suffix: '.min' }),
        // 每次打包时，只打包内容发生改变的文件
        changed(config.dest, { extension:'.js' }),
        // 生成sourcemap，需要配合后面的sourcemaps.write()
        sourcemaps.init(),
        // 执行JS压缩
        uglify(),
        // 生成sourcemap
        sourcemaps.write(),
        // 输出至目标目录
        gulp.dest(config.dest)
    ], cb);
});
// 搬运已压缩的css,js
gulp.task('transCss',function() {
	return gulp.src('src/css/*.min.css')
		.pipe(gulp.dest('dist/css/'))
})
gulp.task('transJs',function() {
	return gulp.src('src/js/*.min.js')
		.pipe(gulp.dest('dist/js/'))
})

// 监听JS文件变改，即时调用任务执行JS增量打包
gulp.task('watch', [], function(cb) {

    gulp.watch(config.src + "/**/*.js", ['minjs']);
    // gulp.watch(config.src + "/**/*.js", ['minjs']);

});


// 开始执行
gulp.task('default', function(cb) {
    runSequence('clean', 'minjs', 'watch', cb);
});