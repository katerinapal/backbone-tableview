import browserify from "browserify";
import cover from "gulp-coverage";
import gulp from "gulp";
import gutil from "gulp-util";
import gulpif from "gulp-if";
import jsdom from "jsdom";
import jshint from "gulp-jshint";
import minimist from "minimist";
import mocha from "gulp-mocha";
import source from "vinyl-source-stream";
import through2 from "through2";
export var globalWindow;
export var globalDocument;

var args = minimist(process.argv.slice(3), {
    default: {
        cover: true,
        html: false
    }
})

var processCover = through2.obj(function (stats, enc, done) {
        var lines = stats.coverage.sloc
        var total = stats.coverage.coverage
        total = isNaN(parseFloat(total)) ? 0 : total.toFixed(2)
        gutil.log(
            'Test coverage:',
            gutil.colors.magenta(total),
            gutil.colors.magenta('%'),
            '(',
            gutil.colors.magenta(lines),
            gutil.colors.magenta('lines'),
            ')'
        )
        if (stats.coverage.uncovered.length) {
            gutil.log('Untestd files:', stats.coverage.uncovered)
        }
        done()
    },
    function (done) {
        // keep on piping!
        done()
})

gulp.task('build', function() {
    var b = browserify({
        entries: [
            'index.js'
        ],
        paths: [
            'src/'
        ]
    })
    .ignore('backbone')
    .ignore('underscore')
    .ignore('jquery')
    .bundle()
    .pipe(source('kinView.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('lint', function(){
    return gulp.src([
            'src/**/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter(''))
})

gulp.task('test', ['lint'], function(){
    // set up window and jquery
    globalDocument = jsdom.jsdom('<!doctype html><html><body></body></html>')
    globalWindow = global.document.defaultView

    return gulp.src(['tests/*Test.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec'
        }))
        //.on("error", gutil.log)
})

gulp.task('testc', ['lint'], function(){
    // set up window and jquery
    globalDocument = jsdom.jsdom('<!doctype html><html><body></body></html>')
    globalWindow = global.document.defaultView

    return gulp.src(['tests/*Test.js'], { read: false })
        .pipe(gulpif(args.cover, cover.instrument({
            pattern: [
                'src/**'
            ]
        })))
        .pipe(mocha({
            reporter: 'spec'
        }))
        .pipe(gulpif(args.cover, cover.gather()))
        .pipe(gulpif(args.cover, processCover))
        .pipe(gulpif(args.cover && args.html, cover.report({
            outFile: 'coverage.html',
            reporter: 'html'
        })))
})

export function setGlobalDocument(value) {
    globalDocument = value;
}

export function setGlobalWindow(value) {
    globalWindow = value;
}
