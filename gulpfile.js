
const buildFolder = 'dist';
const sourceFolder = 'src';

const path = {
    build: {
        html: `${buildFolder}/`,
        styles: `${buildFolder}/`
    },
    source: {
        html: `${sourceFolder}/*.html`,
        styles: `${sourceFolder}/*.less`
    },
    clean: `./${buildFolder}/`
};

const gulp = require('gulp');
const { src, dest } = require('gulp');

const less = require('gulp-less');
const minifyCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const del = require('del');


function copyHTML() {
    return src( path.source.html )
           .pipe( dest( path.build.html ) )
           .pipe( browserSync.stream() );
}

function transformStyles() {
    return src( path.source.styles )
           .pipe( less() )
           .pipe( minifyCSS({ format: 'beautify' }) )
           .pipe( dest( path.build.styles ) )
           .pipe( browserSync.stream() );
}

function initBrowserSync() {
    browserSync.init({
        server: {
            baseDir: `./${buildFolder}/`
        },
        port: 2000,
        notify: false
    });
}

function watchFiles() {
    gulp.watch( path.source.html, copyHTML );
    gulp.watch( path.source.styles, transformStyles );
}

function clean() {
    return del( path.clean );
}


const build = gulp.series(
    clean,
    gulp.parallel(
        copyHTML,
        transformStyles
    )
);

const watch = gulp.parallel(
    build,
    watchFiles,
    initBrowserSync
);

module.exports = {
    default: build,
    build,
    watch,
    copyHTML,
    transformStyles,
};
