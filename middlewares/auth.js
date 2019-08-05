module.exports = function (req, res, next) {
    if (req.path !== '/console/login') {
        let username = req.session.username;
        if (username !== 'admin') {
            return res.redirect('/console/login', 303);
        }
    }
    next();
};