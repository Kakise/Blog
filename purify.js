// Script to remove all unnecessary css from the css source files

const purify = require("purify-css")
var content = []
var css = []
var options = {
    output: 'public/css/style-clean.css',
    info: true,
    minify: true
};

var path = require('path'), fs = require('fs');

function fromDir(startPath, filter, callback) {
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter, callback); //recurse
        } else if (filter.test(filename)) callback(filename);
    }
    ;
};

fromDir('./public', /\.html$/, function (filename) {
    console.log('-- found: ', filename);
    content.push(path.relative('./', filename));
});

fromDir('./public', /\.js$/, function (filename) {
    console.log('-- found: ', filename);
    content.push(path.relative('./', filename));
});

fromDir('./public', /\.css$/, function (filename) {
    console.log('-- found: ', filename);
    css.push(path.relative('./', filename));
});

console.log(content)

purify(content, css, options);

// Minify images
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin('public/images/*.{jpg,png}', 'public/images', {
        plugins: [
            imageminJpegtran(),
            imageminPngquant({quality: '65-80'})
        ]
    });

    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();