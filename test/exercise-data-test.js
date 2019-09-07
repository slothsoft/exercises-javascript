QUnit.module("exercise-data", function() {
	QUnit.test("valid", function(assert) {
		var exercises = require('../src/exercise-data.js');

		assert.equal(1, exercises.length);
	});
});