var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


var multiparty = require('multiparty');

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'use ajax formData to upload files '
    });
});


router.post('/upload', function(req, res, next) {
    var form = new multiparty.Form();

    form.parse(req, function(err, fileds, files) {
        console.log(files)

        var file = files.image[0];

        var fileName = file.originalFilename;
        var target = path.join('public/upload', fileName);

        fs.createReadStream(file.path)
            .pipe(fs.createWriteStream(target));

        res.json({
            url: req.headers.origin + '/upload/' + fileName
        });
    });
});

module.exports = router;
