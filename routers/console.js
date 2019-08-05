let express = require('express');
let router = express.Router();
let auth = require('../middlewares/auth');

router.get('/login', function (req, res) {
    res.render('console/login');
});

router.get('/', auth, function (req, res) {
    res.render('console/index');
});

module.exports = router;