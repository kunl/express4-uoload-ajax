var express = require('express');

var router = require('./router/index');
var path = require('path');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/', router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3002, function() {
    console.log('applaction running at 3002...');
});