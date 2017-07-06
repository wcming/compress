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


//ѹ��CSS
gulp.task('minifycss', function() {
    gulp.src('./www/css/*.css')      //ѹ�����ļ�
        .pipe(concat('main.css'))   //���main.css
        .pipe(rename({suffix: '.min'}))     //����Ϊmain.min.css
        .pipe(minifycss())  //ִ��ѹ��
        .pipe(gulp.dest('./www/css'))   //����ļ���
});
//ѹ��JS
gulp.task('minifyjs', function() {
    gulp.src('./www/js/*.js')
        .pipe(concat('main.js'))    //�ϲ�����js��main.js
        .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest('./www/js'));  //���
});

//ѹ��html
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//���HTMLע��
        collapseWhitespace: true,//ѹ��HTML
        collapseBooleanAttributes: true,//ʡ�Բ������Ե�ֵ <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//ɾ�����пո�������ֵ <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//ɾ��<script>��type="text/javascript"
        removeStyleLinkTypeAttributes: true,//ɾ��<style>��<link>��type="text/css"
        minifyJS: true,//ѹ��ҳ��JS
        minifyCSS: true//ѹ��ҳ��CSS
    };
    gulp.src('./www/*.html')
        .pipe(htmlmin(options))
        .pipe(concat('inde.html'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('www'));
});

//ѹ��ͼƬ
gulp.task('image',function(){
    gulp.src('./www/images/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('./www/img'))
})