var express = require('express');
var router = express.Router();

var dbService = require('../services/db-service.js');

module.exports = function () {
	router.get('/', function (req, res) {
		res.render("index", {
			user: dbService.getData().name
		});
	});
	return router;
};
