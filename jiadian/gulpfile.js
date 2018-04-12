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
    imagemin    = require('gulp-imagemin'),
    changed      = require('gulp-changed'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    runSequence  = require('run-sequence'),
    rename 		= require('gulp-rename'),
    htmlmin 	= require('gulp-htmlmin'),
    postcss 	= require('gulp-postcss'),
    pngquant    = require('imagemin-pngquant'),
    cache       = require('gulp-cache'),
    browserSync  = require('browser-sync').create();

// 清理目标目录
gulp.task('clean', function(cb) {
    pump([
        gulp.src(config.dest),
        clean()
    ], cb)
});
// 同步更新浏览器
gulp.task('browser', function() {
    browserSync.init(
        // 浏览器会监控以下目录，当以下目录中文件发生变化时，会同步更新
        [
            "./src/css/*.css"
        ], {
            // 定义服务器根目录
            server: {
                baseDir: "./src"
            }
        }
    );
});
// 压缩图片
// gulp.task('minImage', function (cb) {
//     pump([
//         gulp.src(config.src+'/img/homepage/*.{png,jpg,gif,ico}'),
//         imagemin({
//             optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//             progressive: true,    //类型：Boolean 默认：false 无损压缩jpg图片
//             interlaced: true,     //类型：Boolean 默认：false 隔行扫描gif进行渲染
//             multipass: true       //类型：Boolean 默认：false 多次优化svg直到完全优化
//         }),
//         gulp.dest(config.dest+'/img/homepage/')
//     ], cb);
// });
gulp.task('minImage', function () {
    gulp.src(config.src+'/img/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({ //只压缩修改的图片
            progressive: true, //无损压缩jpg图片
            svgoPlugins: [{removeViewBox: false}], //不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest(config.dest+'/img'));
});
// 压缩css,加前缀,重命名
gulp.task('mincss', [], function(cb) {
    pump([
        gulp.src([config.src+'/**/*.css','!'+config.src+'/**/*.min.css']),
        rename({suffix: '.min'}),
        changed(config.dest, { extension: '.css'}),
        sourcemaps.init(),
        postcss( autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }) ),
        minifyCss(
            {keepSpecialComments: '*'}
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀        	
        ),
        sourcemaps.write('.'),
        gulp.dest(config.dest)
    ], cb
    )
});

 // 执行JS压缩
gulp.task('minjs', [], function(cb) {
    pump([
        // 获取原目录下所有的js文件
        gulp.src([config.src + "/**/*.js",'!'+config.src+'/**/*.min.js']),
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
// 压缩HTML
gulp.task('minhtml', [], function(cb) {

    pump([
        // 获取原目录下所有的html文件
        gulp.src(config.src + "/*.html"),
        // 每次打包时，只打包内容发生改变的文件
        changed(config.dest, { extension:'.html' }),
        // 执行html压缩
        htmlmin({
            removeComments: true,               // 清除HTML注释
            collapseWhitespace: true,           // 压缩空格
            collapseBooleanAttributes: true,    // 省略布尔属性的值 <input checked="true"/> => <input checked>
            removeEmptyAttributes: true,        // 删除所有空格作属性值 <input id=""> => <input>
            removeScriptTypeAttributes: true,   // 删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,// 删除<style>和<link>的type="text/css"
            minifyJS: true,                     // 压缩页面JS
            minifyCSS: true                     // 压缩页面CSS
        }),
        // 输出至目标目录
        gulp.dest(config.dest)

    ], cb);

});
// 搬运已压缩的css,js
gulp.task('transCss',function() {
	return gulp.src(config.src+'/**/*.min.css')
		.pipe(gulp.dest(config.dest))
})
gulp.task('transJs',function() {
	return gulp.src(config.src+'/**/*.min.js')
		.pipe(gulp.dest(config.dest))
})

// 监听JS文件变改，即时调用任务执行JS增量打包
gulp.task('watch', [], function(cb) {
    gulp.watch(config.src + "/**/*.css", ['mincss']);
    gulp.watch(config.src + "/**/*.js", ['minjs']);
    gulp.watch(config.src + "/*.html", ['minhtml']);
});

// 开始执行
gulp.task('default', function(cb) {
    runSequence('clean','transCss','transJs', 'minjs','mincss', 'minhtml', 'watch', cb);
});