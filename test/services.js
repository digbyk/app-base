var expect = require('expect.js');

describe('DBService', function () {
	describe('#getData()', function () {
		it('should save without error', function (done) {
			require('../config/db.js');
			var dbService = require('../services/db-service.js');
			dbService.getData(function (err, data) {
				expect(data).to.be.okay();
			});
			done();
		})
	});
	describe('#doSomething()', function () {
		it('should return okay', function (done) {
			expect(true).to.be.ok();
			done();
		})
	});
});
