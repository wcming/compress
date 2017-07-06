/**
 * Created by wang on 2017/7/6.
 */
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    imageMin = require('gulp-imagemin');


//压缩CSS
gulp.task('minifycss', function() {
    gulp.src('./www/css/*.css')      //压缩的文件
        .pipe(concat('main.css'))   //输出main.css
        .pipe(rename({suffix: '.min'}))     //改名为main.min.css
        .pipe(minifycss())  //执行压缩
        .pipe(gulp.dest('./www/css'))   //输出文件夹
});
//压缩JS
gulp.task('minifyjs', function() {
    gulp.src('./www/js/*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./www/js'));  //输出
});

//压缩html
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('./www/*.html')
        .pipe(htmlmin(options))
        .pipe(concat('inde.html'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('www'));
});

//压缩图片
gulp.task('image',function(){
    gulp.src('./www/images/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('./www/img'))
})