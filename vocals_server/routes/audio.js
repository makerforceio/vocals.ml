var express = require('express');
var fileUpload = require('express-fileupload');
var path = require('path');
var router = express.Router();

router.post('/', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleAudio;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv((path.resolve('public/audio/audio_sample.jpg')), function(err) {
    if (err)
        return res.status(500).send(err);

    res.send('File uploaded!');
    });
});

module.exports = router;
