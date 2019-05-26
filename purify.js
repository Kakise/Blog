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

purify(content, css, options);
