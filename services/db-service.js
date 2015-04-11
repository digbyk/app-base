var async = require('async');

var Test = require('../models/test.js');

module.exports.getData = function (callback) {
	Test.findOne(function (err, data) {
		if (err) callback(err, null);
		callback(null, data);
	});
}
