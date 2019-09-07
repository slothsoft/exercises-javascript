var functionUnderTest = require('../src/resources/js/framed-words.js');

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
				"*********"
		];
		assert.deepEqual(result, expected);
	});
});