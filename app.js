var express = require('express');
var app = express();
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'ssshhhhh',
	resave: false,
	saveUninitialized: false
}));

var routes = require('./routes/index.js')();
app.use('/', routes);

var server_port = process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function () {
	console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});
