// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');
const GulpClient = require('gulp');
// const browserify = require('browserify')
//const transform = require('vinyl-transform');
//const uglify = require('gulp-uglify');
//var source = require('vinyl-source-stream');

// Sass Task
function scssTask() {
	return src('app/scss/style.scss', { sourcemaps: true })
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest('dist', { sourcemaps: '.' }));
}

// function browserifyTask() {
// 	return browserify('app/js/script.js')
// 	  .bundle()
// 	  //Pass desired output filename to vinyl-source-stream
// 	  .pipe(source('script.js'))
// 	  // Start piping stream to tasks!
// 	  .pipe(dest('app/js/build'));
//   };

//JavaScript Task
function jsTask() {
	return src('app/js/script.js', { sourcemaps: true })//src('app/js/script.js', { sourcemaps: true })
		.pipe(babel({ presets: ['@babel/preset-env'] }))
		.pipe(terser())
		.pipe(dest('dist', { sourcemaps: '.' }));
}


// Browsersync
function browserSyncServe(cb) {
	browsersync.init({
		server: {
			baseDir: '.',
		},
		notify: {
			styles: {
				top: 'auto',
				bottom: '0',
			},
		},
	});
	cb();
}
function browserSyncReload(cb) {
	browsersync.reload();
	cb();
}

// Watch Task
function watchTask() {
	watch('*.html', browserSyncReload);
	watch(
		['app/scss/**/*.scss', 'app/**/*.js'],
		series(scssTask,  jsTask, browserSyncReload)
	);
}

// Deploy task
GulpClient.task('deploy', function(){
	return GulpClient.src('./**/*')
	.pipe(ghPages());
})



// Default Gulp Task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);
