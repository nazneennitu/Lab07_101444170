var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// POST route for /users
router.post('/', function (req, res) {
    console.log("Received POST request with data:", req.body);
    res.send('POST received!');
});

module.exports = router;
