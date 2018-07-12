var gulp = require('gulp');

var server = require('gulp-webserver');

var url = require('url');

var fs = require('fs');

var path = require('path');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8989,
            middleware: function(req, res, next) {
                var pathname = url.paser(req.url).pathname;
                if (pathname === 'favicon.ico') {
                    return false
                }

                pathname = pathname === '/' ? 'index.html' : pathname;
            }
        }))
})