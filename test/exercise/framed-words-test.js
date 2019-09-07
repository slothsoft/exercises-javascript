var functionUnderTest = require('../../src/exercise/framed-words.js');

QUnit.module("framed-words", function() {
	QUnit.test("hello world", function(assert) {
		var input = [ "Hello", "World", "in", "a", "frame" ];
		var result = functionUnderTest(input);
		var expected = [
				"*********",
				"* Hello *",
				"* World *",
				"* in    *",
				"* a     *",
				"* frame *",
				"*********",
		];
		assert.deepEqual(result, expected);
	});

	QUnit.test("empty array", function(assert) {
		// it's not really possible to input this, but still
		var input = []; 
		var result = functionUnderTest(input);
		var expected = [
			"****",
			"****",
		];
		assert.deepEqual(result, expected);
	});

	QUnit.test("empty string", function(assert) {
		// it's not really possible to input this, but still
		var input = [ "" ]; 
		var result = functionUnderTest(input);
		var expected = [
			"****",
			"*  *",
			"****",
		];
		assert.deepEqual(result, expected);
	});

	QUnit.test("single line", function(assert) {
		// it's not really possible to input this, but still
		var input = [ "Hello World!" ]; 
		var result = functionUnderTest(input);
		var expected = [
			"****************",
			"* Hello World! *",
			"****************",
		];
		assert.deepEqual(result, expected);
	});
});