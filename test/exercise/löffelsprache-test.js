var functionUnderTest = require('../../src/exercise/löffelsprache.js');

QUnit.module("löffelsprache", function() {
	QUnit.test("Example", function(assert) {
		var result = functionUnderTest("Das ist die Löffelsprache");
		assert.equal(result, "Dalewas ilewist dielewie Lölewöffelewelspralewachelewe");
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
		var result = functionUnderTest("auto");
		assert.equal(result, "aulewautolewo");
	});
	QUnit.test("single word with captial letter", function(assert) {
		var result = functionUnderTest("Uhu");
		assert.equal(result, "Ulewuhulewu");
	});
	QUnit.test("single word with umlaut", function(assert) {
		var result = functionUnderTest("Möwe");
		assert.equal(result, "Mölewöwelewe");
	});
	QUnit.test("Löffelsprache", function(assert) {
		var result = functionUnderTest("Löffelsprache");
		assert.equal(result, "Lölewöffelewelspralewachelewe");
	});
	QUnit.test("single vowel a", function(assert) {
		var result = functionUnderTest("a");
		assert.equal(result, "alewa");
	});
	QUnit.test("single vowel e", function(assert) {
		var result = functionUnderTest("e");
		assert.equal(result, "elewe");
	});
	QUnit.test("single vowel i", function(assert) {
		var result = functionUnderTest("i");
		assert.equal(result, "ilewi");
	});
	QUnit.test("single vowel o", function(assert) {
		var result = functionUnderTest("o");
		assert.equal(result, "olewo");
	});
	QUnit.test("single vowel u", function(assert) {
		var result = functionUnderTest("u");
		assert.equal(result, "ulewu");
	});
	QUnit.test("single umlaut ä", function(assert) {
		var result = functionUnderTest("ä");
		assert.equal(result, "älewä");
	});
	QUnit.test("single umlaut ö", function(assert) {
		var result = functionUnderTest("ö");
		assert.equal(result, "ölewö");
	});
	QUnit.test("single umlaut ü", function(assert) {
		var result = functionUnderTest("ü");
		assert.equal(result, "ülewü");
	});
	QUnit.test("diphthong ei", function(assert) {
		var result = functionUnderTest("ei");
		assert.equal(result, "eilewei");
	});
	QUnit.test("diphthong ie", function(assert) {
		var result = functionUnderTest("ie");
		assert.equal(result, "ielewie");
	});
	QUnit.test("diphthong au", function(assert) {
		var result = functionUnderTest("au");
		assert.equal(result, "aulewau");
	});
	QUnit.test("single consonant k", function(assert) {
		var result = functionUnderTest("k");
		assert.equal(result, "k");
	});
	QUnit.test("multiple consonants", function(assert) {
		var result = functionUnderTest("qwrtz");
		assert.equal(result, "qwrtz");
	});
	QUnit.test("many whitespace much wow", function(assert) {
		var result = functionUnderTest("Hallo      \t \n Welt");
		assert.equal(result, "Halewallolewo Welewelt");
	});
});