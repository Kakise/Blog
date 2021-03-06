var decompress = require('gulp-decompress');
var del = require('del');
var download = require("gulp-download");
var fs = require('fs');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var path = require('path');
var stylint = require('gulp-stylint');
var stylish = require('jshint-stylish');
var yaml = require('js-yaml');


gulp.task('lib:clean', function () {
    return del.sync(['./blog/lib/*']);
});

gulp.task('lib:fontAwesome', function () {
    return gulp.src([
        'node_modules/fontawesome5-webfont/webfonts/*',
        'node_modules/fontawesome5-webfont/css/fontawesome-all.min.css'
    ], {base: 'node_modules/fontawesome5-webfont'})
        .pipe(gulp.dest('./blog/lib/font-awesome'))
});

gulp.task('lib:mesloFont', function () {
    return download('https://github.com/andreberg/Meslo-Font/blob/master/dist/v1.2/Meslo%20LG%20v1.2.zip?raw=true')
        .pipe(decompress({
            filter: file => path.extname(file.path) == '.ttf',
            strip: 1
        }))
        .pipe(gulp.dest('./blog/lib/meslo-LG'));
});

gulp.task('lib:justifiedGallery', function () {
    return gulp.src([
        'node_modules/justifiedGallery/dist/css/*.min.css',
        'node_modules/justifiedGallery/dist/js/*.min.js'
    ], {base: 'node_modules/justifiedGallery/dist'})
        .pipe(gulp.dest('./blog/lib/justified-gallery'))
});

gulp.task('lib:jQuery', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./blog/lib/jquery'))
});

gulp.task('lint:js', function () {
    return gulp.src([
        './blog/js/**/*.js',
    ]).pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('lint:stylus', function () {
    return gulp.src([
        './blog/css/*.styl',
        './blog/css/_partial/*.styl',
        './blog/css/_colors/*.styl'
    ]).pipe(stylint({
        config: '.stylintrc',
        reporter: {
            reporter: 'stylint-stylish',
            reporterOptions: {
                verbose: true
            }
        }
    }))
        .pipe(stylint.reporter());
});

gulp.task('validate:config', function (cb) {
    var themeConfig = fs.readFileSync(path.join(__dirname, '_config.yml'));

    try {
        yaml.safeLoad(themeConfig);
        cb();
    } catch (error) {
        cb(new Error(error));
    }
});

gulp.task('validate:languages', function (cb) {
    var languagesPath = path.join(__dirname, 'languages');
    var languages = fs.readdirSync(languagesPath);
    var errors = [];
    for (var i in languages) {
        var languagePath = path.join(languagesPath, languages[i]);
        try {
            yaml.safeLoad(fs.readFileSync(languagePath), {
                filename: path.relative(__dirname, languagePath)
            });
        } catch (error) {
            errors.push(error);
        }
    }
    if (errors.length == 0) {
        cb();
    } else {
        cb(errors);
    }
});

gulp.task('lib', ['lib:clean', 'lib:jQuery', 'lib:fontAwesome', 'lib:mesloFont', 'lib:justifiedGallery']);
gulp.task('lint', ['lint:js', 'lint:stylus']);
gulp.task('validate', ['validate:config', 'validate:languages']);
gulp.task('default', ['lint', 'validate']);
