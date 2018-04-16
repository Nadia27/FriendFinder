var express = require('express');
var path = require('path');
var router = express.Router();

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/home.html'));
});

router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/views/survey.html'));
});

//"catch all" catches routes not previously defined
/* router.get("*", function(req, res) {
   res.sendFile(path.join(__dirname, "../public/home.html"));
}); */

module.exports = router;
