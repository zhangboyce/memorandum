let path = require('path');
let exphbs = require('express-handlebars');
module.exports = function (app) {
    let viewPath = path.join(__dirname, '/views');
    app.engine('html', exphbs({
        extname: '.html',
        defaultLayout: null,
    }));
    app.set('views',viewPath);
    app.set('view engine', 'html');
};