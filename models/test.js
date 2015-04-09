var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = mongoose.Schema({
	name: String
});

var Test = mongoose.model('Test', testSchema);

module.exports = Test;
