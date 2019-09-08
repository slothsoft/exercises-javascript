QUnit.module("exercise-data", function() {
	QUnit.test("valid", function(assert) {
		var exercises = require('../src/exercise-data.js');

		assert.equal(true, exercises.length > 1);
	});
});