let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.use(function (req, res) {
    res.render('404');
});

module.exports = router;