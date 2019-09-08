var functionUnderTest = require('../../src/exercise/pig-latin.js');

QUnit.module("pig-latin", function() {
	QUnit.test("Brown Fox", function(assert) {
		var result = functionUnderTest("The quick brown fox");
		assert.equal(result, "Hetay uickqay rownbay oxfay");
	});
	QUnit.test("empty", function(assert) {
		var result = functionUnderTest("");
		assert.equal(result, "");
	});
	QUnit.test("null", function(assert) {
		var result = functionUnderTest(null);
		assert.equal(result, null);
	});
	QUnit.test("single word", function(assert) {
		var result = functionUnderTest("house");
		assert.equal(result, "ousehay");
	});
	QUnit.test("single word with captial letter", function(assert) {
		var result = functionUnderTest("House");
		assert.equal(result, "Ousehay");
	});
	QUnit.test("single word with one letter", function(assert) {
		var result = functionUnderTest("a");
		assert.equal(result, "aay");
	});
	QUnit.test("single word with one captial letter", function(assert) {
		var result = functionUnderTest("I");
		assert.equal(result, "Iay");
	});
	QUnit.test("many whitespace much wow", function(assert) {
		var result = functionUnderTest("The    quick brown \t \n fox");
		assert.equal(result, "Hetay uickqay rownbay oxfay");
	});
});