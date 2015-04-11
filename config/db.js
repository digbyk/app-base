var config = require('cloud-env');

var mongoose = require('mongoose');
var mongoUrl = config.get('MONGODB_DB_URL');

mongoose.connect('mongodb://mongo:mongo@ds061691.mongolab.com:61691/testdb');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Database ready for connections');
});
