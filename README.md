# Gulp-cssurl [![NPM version](https://img.shields.io/npm/v/gulp-cssurl.svg)](http://badge.fury.io/js/gulp-cssurl)
A plugin to systematically replace URLs in CSS code with [cssurl](https://github.com/nzakas/cssurl).

**Node support:** 0.10.x, 0.11.x

    var gulp = require('gulp');
    var cssurl = require('gulp-cssurl');

    gulp.task('default', function() {
        gulp.src('src/*.css')
        .pipe(cssurl())
        .pipe(gulp.dest('build'));
    });

## Install
Install **gulp-cssurl** with **[npm](https://www.npmjs.org/)**:

    $ npm install gulp-cssurl --save-dev

## Contributing

To contribute to **gulp-cssurl**, clone this repo locally and commit your code.

Please check that everything works before opening a pull-request.

## License

gulp-cssurl is licensed under the [MIT](https://github.com/alexandref93/gulp-cssurl/blob/master/LICENSE) License
