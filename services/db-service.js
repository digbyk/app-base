var async = require('async');
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:mongo@ds061691.mongolab.com:61691/testdb');

var Test = require('../models/test.js');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('Database ready for connections');
	var t = new Test({
		name: 'banana'
	});
	t.save();
});

module.exports.getData = function (cb) {
	Test.findOne(function (err, name) {
		if (err) return console.error(err);
		console.log(name);
		cb(name.name);
	});
}
