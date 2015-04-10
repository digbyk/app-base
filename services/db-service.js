var async = require('async');
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:mongo@ds061691.mongolab.com:61691/testdb');

var Test = require('../models/test.js');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Database ready for connections');
});

module.exports.getData = function (callback) {
	Test.findOne(function (err, data) {
		if (err) callback(err, null);
		callback(null, data);
	});
}