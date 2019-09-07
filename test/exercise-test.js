var Exercise = require('../src/exercise.js');

QUnit.module("exercise", function() {
	QUnit.test("minimal constructor", function(assert) {
		var exercise = new Exercise("Display Name", "Description.");

		assert.equal(exercise.getId(), "display-name");
		assert.equal(exercise.getDisplayName(), "Display Name");
		assert.equal(exercise.getDescription(), "Description.");
		assert.equal(exercise.getShortDescription(), "Description.");
		assert.equal(exercise.getSource(), null);
	});
});