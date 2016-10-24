var gulp = require('gulp');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var path = require('path');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var WrapperPlugin = require('wrapper-webpack-plugin');
var release = require('gulp-github-release');

var webpackModule = {
	loaders: [
		{
			test: /\.css$/, loader: "raw"
		},
		{
			test: /\.mustache$/, loader: "raw"
		},
		{
			test: /.js?$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}
	]
};

gulp.task('test', function () {
	return gulp
	.src('test/index.html')
	.pipe(mochaPhantomJS({
		suppressStderr: false,
		phantomjs: {
			viewportSize: {
				width: 1440,
				height: 900
			},
			settings: {
				webSecurityEnabled: false,
				localToRemoteUrlAccessEnabled: true
			}
		}
	}));
});

gulp.task('default', function() {
	return gulp.src('src/index.js')
		.pipe(webpack({
			watch: true,
			devtool: 'source-map',
			output: {
				filename: 'indexdotco-dev.js',
				library: 'indexDotCo',
				libraryTarget: 'umd'
			},
			plugins: [
				new WrapperPlugin({
			      header: '/* index.co cards – dev */',
			      footer: "if(window.indexDotCo && typeof window.indexDotCo === 'function'){window.indexDotCo = window.indexDotCo()}"
			    })
			],
			module: webpackModule,
			resolve: {
				root: path.resolve('./src')
			}
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('make', function() {
	return gulp.src('src/index.js')
		.pipe(webpack({
			output: {
				filename: 'indexdotco.js',
				library: 'indexDotCo',
				libraryTarget: 'umd'
			},
			plugins: [
				new WrapperPlugin({
				  header: '/* index.co cards */',
				  footer: "if(window.indexDotCo && typeof window.indexDotCo === 'function'){window.indexDotCo = window.indexDotCo()}"
				})
			],
			module: webpackModule,
			resolve: {
				root: path.resolve('./src')
			}
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'))
})

gulp.task('release', function(){
	return gulp.src('dist/indexdotco.js')
		.pipe(release({
			manifest: require('./package.json')
		}));
});
