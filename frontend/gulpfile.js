/*
*	DEPENDENCIAS
*/ 

var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	browserify = require('browserify'),
	concat = require('gulp-concat')

/*
*	configuración task   
*/ 

gulp.task('dev:html', function(){
	gulp.src('../resources/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('../'))
});

gulp.task('dev:css', function(){
	gulp.src('../frontend/assets/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('../public/'))
});

gulp.task('default',['dev:html','dev:css'], function(){
	gulp.watch('../resources/**/*.pug',['dev:html']);
	gulp.watch('../frontend/assets/**/*.scss',['dev:css']);
});
