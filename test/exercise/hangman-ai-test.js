const hangmanRequire = require('../../src/exercise/hangman-ai.js');
const Hangman = hangmanRequire.Hangman;
const HangmanAi = hangmanRequire.HangmanAi;

QUnit.module("hangman", function() {
	
	QUnit.test("constructor()", function(assert) {
		var hangman = new Hangman({
			dictionary : [ 'schadenfreude' ],
		});
		assert.notEqual(hangman, null);
		assert.equal(hangman.wrongGuesses, 0);
		assert.equal(hangman.hasWon(), false);
		
		// since there is only one word in the dictionary it's the one that is chosen
		assert.equal(hangman.chosenWord, 'SCHADENFREUDE');
		assert.equal(hangman.showProgress(), '_____________');
	});
	
	
	QUnit.test("guess() correct", function(assert) {
		var hangman = new Hangman({
			dictionary : [ 'schadenfreude' ],
		});
		
		assert.equal(hangman.guess('E'), true);
		assert.equal(hangman.showProgress(), '_____E___E__E');
		assert.equal(hangman.wrongGuesses, 0);
		assert.equal(hangman.hasWon(), false);
	});

	QUnit.test("guess() wrong", function(assert) {
		var hangman = new Hangman({
			dictionary : [ 'schadenfreude' ],
		});

		assert.equal(hangman.guess('T'), false);
		assert.equal(hangman.showProgress(), '_____________');
		assert.equal(hangman.wrongGuesses, 1);
		assert.equal(hangman.hasWon(), false);
	});
	
	QUnit.test("game", function(assert) {
		var hangman = new Hangman({
			dictionary : [ 'schadenfreude' ],
		});
		
		// round 1
		assert.equal(hangman.guess('E'), true);
		assert.equal(hangman.showProgress(), '_____E___E__E');
		assert.equal(hangman.wrongGuesses, 0);
		assert.equal(hangman.hasWon(), false);

		// round 2
		assert.equal(hangman.guess('T'), false);
		assert.equal(hangman.showProgress(), '_____E___E__E');
		assert.equal(hangman.wrongGuesses, 1);
		assert.equal(hangman.hasWon(), false);

		// round 3...8
		assert.equal(hangman.guess('S'), true);
		assert.equal(hangman.guess('C'), true);
		assert.equal(hangman.guess('H'), true);
		assert.equal(hangman.guess('A'), true);
		assert.equal(hangman.guess('D'), true);
		assert.equal(hangman.guess('N'), true);
		assert.equal(hangman.showProgress(), 'SCHADEN__E_DE');
		assert.equal(hangman.wrongGuesses, 1);
		assert.equal(hangman.hasWon(), false);

		// round 9
		assert.equal(hangman.guess('Q'), false);
		assert.equal(hangman.showProgress(), 'SCHADEN__E_DE');
		assert.equal(hangman.wrongGuesses, 2);
		assert.equal(hangman.hasWon(), false);

		// round 10...12
		assert.equal(hangman.guess('F'), true);
		assert.equal(hangman.guess('R'), true);
		assert.equal(hangman.guess('U'), true);
		assert.equal(hangman.showProgress(), 'SCHADENFREUDE');
		assert.equal(hangman.wrongGuesses, 2);
		assert.equal(hangman.hasWon(), true);
	});
});

QUnit.module("hangman-ai", function() {
	
	QUnit.test("constructor()", function(assert) {
		var hangmanAi = new HangmanAi();
		assert.notEqual(hangmanAi, null);
	});
	
	QUnit.test("filterWordsByCurrentWord() by length", function(assert) {
		var hangmanAi = new HangmanAi();
		
		var possibleWords = hangmanAi.filterWordsByCurrentWord([ "A", "AB", "ABC", "B", "BC", "BCD" ], "__");
		assert.deepEqual(possibleWords, ["AB", "BC"]);
	});

	QUnit.test("filterWordsByCurrentWord() by letters", function(assert) {
		var hangmanAi = new HangmanAi();
		
		var possibleWords = hangmanAi.filterWordsByCurrentWord([ "ABC", "DEF", "GHI", "JBL" ], "_B_");
		assert.deepEqual(possibleWords, ["ABC", "JBL"]);
	});

	QUnit.test("calculateAlphabet()", function(assert) {
		var hangmanAi = new HangmanAi();
		
		var alphabet = hangmanAi.calculateAlphabet([ "ABC", "DEF", "GHI", "JBL", "DGJ" ]);
		assert.deepEqual(alphabet, Array.from("ABCDEFGHIJL"));
	});

	QUnit.test("findMostCommonLetter()", function(assert) {
		var hangmanAi = new HangmanAi();

		var letter = hangmanAi.findMostCommonLetter([ "A", "B", "A" ], Array.from("AB"));
		assert.deepEqual(letter.letter, "A");
		
		letter = hangmanAi.findMostCommonLetter([ "AA", "B", "B" ], Array.from("AB"));
		assert.deepEqual(letter.letter, "B");

		letter = hangmanAi.findMostCommonLetter([ "AA", "B", "B", "C" ], Array.from("C"));
		assert.deepEqual(letter.letter, "C");
	});
	
	QUnit.test("findMostCommonLetter() lower case", function(assert) {
		var hangmanAi = new HangmanAi();

		var letter = hangmanAi.findMostCommonLetter([ "a", "b", "a" ], Array.from("AB"));
		assert.deepEqual(letter.letter, "A");
		
		letter = hangmanAi.findMostCommonLetter([ "aa", "b", "b" ], Array.from("AB"));
		assert.deepEqual(letter.letter, "B");

		letter = hangmanAi.findMostCommonLetter([ "aa", "b", "b", "c" ], Array.from("C"));
		assert.deepEqual(letter.letter, "C");
	});
	
	QUnit.test("takeNextGuess() flood", function(assert) {
		var hangman = new Hangman({
			dictionary : [ 'steal', 'femur', 'fixer', 'ocean', 'flood', 'craft', 'horse', 'fjord'],
		});
		hangman.chosenWord = 'FLOOD';
		
		var hangmanAi = new HangmanAi();
		hangmanAi.initFromHangman(hangman);

		// round 1
		assert.equal(hangmanAi.takeNextGuess(), "E");
		assert.deepEqual(hangmanAi.guesses, ["E"]);
		assert.equal(hangman.showProgress(), '_____');
		// no E so reduce list
		assert.deepEqual(hangmanAi.possibleWords, ['flood', 'craft', 'fjord']);

		// round 2
		assert.equal(hangmanAi.takeNextGuess(), "F");
		assert.deepEqual(hangmanAi.guesses, ["E", "F"]);
		assert.equal(hangman.showProgress(), 'F____');

		// round 3 - 1st letter F -> flood or fjord
		assert.equal(hangmanAi.takeNextGuess(), "O");
		assert.deepEqual(hangmanAi.guesses, ["E", "F", "O"]);
		assert.equal(hangman.showProgress(), 'F_OO_');
		
		// round 4 & 5 - L and D in any order
		hangmanAi.takeNextGuess();
		hangmanAi.takeNextGuess();

		assert.equal(hangman.showProgress(), 'FLOOD');
		assert.equal(hangman.hasWon(), true);
	});

	QUnit.test("takeNextGuess() fjord", function(assert) {
		var hangman = new Hangman({
			dictionary : [ 'steal', 'femur', 'fixer', 'ocean', 'flood', 'craft', 'horse', 'fjord'],
		});
		hangman.chosenWord = 'FJORD';
		
		var hangmanAi = new HangmanAi();
		hangmanAi.initFromHangman(hangman);

		// round 1 & 2 like above
		assert.equal(hangmanAi.takeNextGuess(), "E");
		assert.equal(hangmanAi.takeNextGuess(), "F");

		// round 3 - 1st letter F -> flood or fjord
		assert.equal(hangmanAi.takeNextGuess(), "O");
		assert.deepEqual(hangmanAi.guesses, ["E", "F", "O"]);
		assert.equal(hangman.showProgress(), 'F_O__');

		// this list should not contain "flood" because it has a second O
		var result = hangmanAi.filterWordsByCurrentWord(hangmanAi.possibleWords, hangman.showProgress());
		assert.deepEqual(result, ['fjord']);
	});


	QUnit.test("solve()", function(assert) {
		var hangman = new Hangman({
			dictionary : [ 'steal', 'femur', 'fixer', 'ocean', 'flood', 'craft', 'horse', 'fjord'],
		});
		hangman.chosenWord = 'FLOOD';
		
		var hangmanAi = new HangmanAi();
		hangmanAi.solve(hangman);

		assert.equal(hangman.showProgress(), 'FLOOD');
		assert.equal(hangman.hasWon(), true);
	});
});