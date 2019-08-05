let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
require('./viewsEngine')(app);

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

let cookieSecret = require('./credentials').cookieSecret;
app.use(require('cookie-parser')(cookieSecret));
app.use(require('express-session')());

app.use('/', require('./routers/home'));
app.use('/console', require('./routers/console'));

app.set('port', process.env.port || 3333);
app.listen(app.get('port'), function () {
   console.log('Express started on http://localhost:' + app.get('port'), '; press Ctrl-C to terminate.');
});