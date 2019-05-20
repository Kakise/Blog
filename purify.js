const purify = require("purify-css")
var content = []
var options = {
    output: 'public/src/style-clean.css'
};

var path = require('path'), fs = require('fs');

function fromDir(startPath, filter, callback) {

    //console.log('Starting from dir '+startPath+'/');

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
    content.push(path.resolve(filename));
});

fromDir('./public', /\.js$/, function (filename) {
    console.log('-- found: ', filename);
    content.push(path.resolve(filename));
});

fromDir('./public', /\.css$/, function (filename) {
    console.log('-- found: ', filename);
    content.push(path.resolve(filename));
});

console.log(content)

purify(content, "", options);