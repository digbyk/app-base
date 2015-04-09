var express = require('express');
var router = express.Router();

var dbService = require('../services/db-service.js');

module.exports = function () {
	router.get('/', function (req, res) {
		dbService.getData(function (err, data) {
			if (err) console.log(err);
			res.render("index", {
				user: data.name
			});
		});
	});
	return router;
};
