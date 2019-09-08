var functionUnderTest = require('../../src/exercise/blueprint.js');

QUnit.module("blueprint", function() {
	QUnit.test("hello world", function(assert) {
		var result = functionUnderTest("World");
		assert.equal(result, "Hello World!");
	});
// this is for testing the test report
//	QUnit.test("failure", function(assert) {
//		assert.equal("1", "2");
//	});
//});
//
//QUnit.module("framed-words", function() {
//	QUnit.test("exception", function(assert) {
//		test.blob();
//	});
});