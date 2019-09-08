var functionUnderTest = require('../../src/exercise/blueprint.js');

QUnit.module("blueprint", function() {
	QUnit.test("hello world", function(assert) {
		var result = functionUnderTest("World");
		assert.equal(result, "Hello World!");
	});
});