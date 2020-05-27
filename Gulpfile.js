import ext_browserify_browserify from "browserify";
import ext_gulpcoverage_cover from "gulp-coverage";
import ext_gulp_gulp from "gulp";
import ext_gulputil_gutil from "gulp-util";
import ext_gulpif_gulpif from "gulp-if";
import ext_jsdom_jsdom from "jsdom";
import ext_gulpjshint_jshint from "gulp-jshint";
import ext_minimist_minimist from "minimist";
import ext_gulpmocha_mocha from "gulp-mocha";
import ext_vinylsourcestream_source from "vinyl-source-stream";
import ext_through2_through2 from "through2";
export var globalWindow;
export var globalDocument;

var args = ext_minimist_minimist(process.argv.slice(3), {
    default: {
        cover: true,
        html: false
    }
})

var processCover = ext_through2_through2.obj(function (stats, enc, done) {
        var lines = stats.coverage.sloc
        var total = stats.coverage.coverage
        total = isNaN(parseFloat(total)) ? 0 : total.toFixed(2)
        ext_gulputil_gutil.log(
            'Test coverage:',
            ext_gulputil_gutil.colors.magenta(total),
            ext_gulputil_gutil.colors.magenta('%'),
            '(',
            ext_gulputil_gutil.colors.magenta(lines),
            ext_gulputil_gutil.colors.magenta('lines'),
            ')'
        )
        if (stats.coverage.uncovered.length) {
            ext_gulputil_gutil.log('Untestd files:', stats.coverage.uncovered)
        }
        done()
    },
    function (done) {
        // keep on piping!
        done()
})

ext_gulp_gulp.task('build', function() {
    var b = ext_browserify_browserify({
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
    .pipe(ext_vinylsourcestream_source('kinView.js'))
    .pipe(ext_gulp_gulp.dest('./'))
})

ext_gulp_gulp.task('lint', function(){
    return ext_gulp_gulp.src([
            'src/**/*.js'
        ])
        .pipe(ext_gulpjshint_jshint())
        .pipe(ext_gulpjshint_jshint.reporter('default'))
        .pipe(ext_gulpjshint_jshint.reporter(''));
})

ext_gulp_gulp.task('test', ['lint'], function(){
    // set up window and jquery
    globalDocument = ext_jsdom_jsdom.jsdom('<!doctype html><html><body></body></html>')
    globalWindow = global.document.defaultView

    return ext_gulp_gulp.src(['tests/*Test.js'], { read: false })
        .pipe(ext_gulpmocha_mocha({
            reporter: 'spec'
        }));
        //.on("error", gutil.log)
})

ext_gulp_gulp.task('testc', ['lint'], function(){
    // set up window and jquery
    globalDocument = ext_jsdom_jsdom.jsdom('<!doctype html><html><body></body></html>')
    globalWindow = global.document.defaultView

    return ext_gulp_gulp.src(['tests/*Test.js'], { read: false })
        .pipe(ext_gulpif_gulpif(args.cover, ext_gulpcoverage_cover.instrument({
            pattern: [
                'src/**'
            ]
        })))
        .pipe(ext_gulpmocha_mocha({
            reporter: 'spec'
        }))
        .pipe(ext_gulpif_gulpif(args.cover, ext_gulpcoverage_cover.gather()))
        .pipe(ext_gulpif_gulpif(args.cover, processCover))
        .pipe(ext_gulpif_gulpif(args.cover && args.html, ext_gulpcoverage_cover.report({
            outFile: 'coverage.html',
            reporter: 'html'
        })));
})

export function setGlobalDocument(value) {
    globalDocument = value;
}

export function setGlobalWindow(value) {
    globalWindow = value;
}
