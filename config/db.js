var config = require('cloud-env');

var mongoose = require('mongoose');
var mongoUrl = config.get('MONGODB_DB_URL');
mongoose.connect(mongoUrl);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Database ready for connections');
});
