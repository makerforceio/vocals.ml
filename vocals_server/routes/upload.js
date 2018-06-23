var express = require('express');
var fileUpload = require('express-fileupload');
var path = require('path');
var fs = require("fs");

var router = express.Router();

router.post('/client', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.(client)');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleAudio;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv((path.resolve('public/audio/audio_sample.wav')), function(err) {
    if (err)
        return res.status(500).send(err);

    res.sendFile(path.resolve('public/complete.html'));
    });
});

router.post('/process', function(req, res){
    var outStream = fs.createWriteStream(path.resolve('public/audio/audio_output.wav'));
    req.pipe(outStream);
    res.send('Success');
});

module.exports = router;
