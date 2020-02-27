
class Hangman {
	
	constructor(config) {
		if (config == null) throw "Config has to be set!";
		this.config = config;
		this.wrongGuesses = 0;
		this.setChosenWord(this.calculateRandomWord(config.dictionary));
	}

	setChosenWord(input) {
		this.chosenWord = input;
		this.progress = Array.from("_".repeat(input.length));
	}
	
	calculateRandomWord(dict) {
		if (dict == null) throw "Dictionary has to be set!";
		return dict[Math.floor(Math.random() * dict.length)].toUpperCase();
	}
	
	hasWon() {
		return !this.progress.includes("_");
	}

	showProgress() {
		return this.progress.join("");
	}

	guess(char) {
		char = char.toUpperCase();
		
		if (this.chosenWord.includes(char)) {
			for (var i = 0; i < this.chosenWord.length; i++) {
				if (this.chosenWord.charAt(i) == char) {
					this.progress[i] = char;
				}
			}
			return true;
		}
		this.wrongGuesses++;
		return false;
	}

}

class HangmanAi {

	constructor() {
		this.alphabet = Array.of("ABCDEFGHIJKLMNOPQRSTUVWXZ");
	}
	
	solve(hangman) {
		this.initFromHangman(hangman);
		while (!hangman.hasWon()) {
			this.takeNextGuess();
		}
	}

	initFromHangman(hangman) {
		this.hangman = hangman;
		this.possibleWords = hangman.config.dictionary;
		this.alphabet = this.calculateAlphabet(this.possibleWords);
		this.guesses = [];
		this.log = [];
	}

	calculateAlphabet(wordList) {
		 var result = [];
		 for (var wordIndex in wordList) {
			 var word = wordList[wordIndex].toUpperCase();
			 for (var letterIndex in word) {
				 var letter = word[letterIndex];
				 if (result.indexOf(letter) < 0) {
					 result.push(letter);
				 }
			 }
		 }
		 return result;
	}

	takeNextGuess() {
		this.possibleWords = this.filterWordsByCurrentWord(this.possibleWords, this.hangman.showProgress());
		var mostCommon = this.findMostCommonLetter(this.possibleWords, this.alphabet);
		var letter = mostCommon.letter;
		var guessCorrect = this.hangman.guess(letter);
		this.addLogEntry(this.possibleWords, mostCommon, guessCorrect);
		if (guessCorrect) {
			// what to do for correct letters?
		} else {
			this.possibleWords = this.possibleWords.filter(word => !word.toUpperCase().includes(letter));
		}
		this.guesses.push(letter);
		this.alphabet.splice(this.alphabet.indexOf(letter), 1);
		return letter;
	}
	
	filterWordsByCurrentWord(wordList, currentWord) {
		var charsRegex = "[" + this.alphabet.join("") + "]";
		var regex = new RegExp("^" + currentWord.replace(/_/g, charsRegex + "{1}") + "$", "i");
		return wordList.filter(word => word.match(regex));
	}
	
	findMostCommonLetter(possibleWords, alphabet) {
		var count = [];
		for (var letterIndex in alphabet) {
			var letter = alphabet[letterIndex];
			count[letter] = possibleWords.filter(word => word.toUpperCase().includes(letter)).length;
		}
		var result = " ";
		var resultValue = -1;
		for (var letter in count) {
			if (count[letter] > resultValue) {
				result = letter;
				resultValue = count[letter];
			}
		}
		return { letter : result, count : resultValue };
	}

	addLogEntry(possibleWords, mostCommon, guessCorrect) {
		var logEntry = possibleWords.length + " words are possible";
		if (possibleWords.length <= 5) {
			logEntry += " (" + possibleWords.join(", ") + ")";
		}
		logEntry += ".\n";
		logEntry += "  Guessing " + mostCommon.letter + " because it's in " + mostCommon.count + " of these.\n";
		logEntry += "  -> Guess was " + (guessCorrect ? "correct" : "wrong") +".\n";
		this.log.push(logEntry);
	}
	
	getLog() {
		return this.log.join("\n");
	}
	
}

module.exports.Hangman = Hangman;
module.exports.HangmanAi = HangmanAi;