Exercise = require("../exercise.js");

class ExerciseImpl extends Exercise {

	constructor() {
		super('Hangman AI', 'Write a program that plays Hangman as good as possible.');

		this.id = 'hangman-ai';
		this.description = 'Write a program that plays Hangman as good as possible. For example you can use a large dictionary like this and select the letter that excludes most words that are still possible solutions.';
		this.source = "https://adriann.github.io/programming_problems.html"; 
		this.script = `
			var input = document.getElementById('inputWords').value;
			
			var hangman = new Hangman({ dictionary : HANGMAN_DICTIONARY});
			hangman.setChosenWord(input.toUpperCase());
			var start = hangman.showProgress();
			
			var hangmanAi = new HangmanAi();
			hangmanAi.solve(hangman);

			document.getElementById('log').value = hangmanAi.getLog();
			document.getElementById('summary').value =  
				start.length + " letters long: " + start + "\n" +
				hangmanAi.guesses.length + " guesses: " + hangmanAi.guesses.join(", ");`; 
		this.html = `<h2>Input</h2>
<select id="inputWords">
</select> 
<br />
<button onclick="executeExercise()">Execute</button>
<h2>Output</h2>
<textarea id="summary" rows="1" cols="50" readonly
	style="background-color: #DDDDDD;"></textarea>
<textarea id="log" rows="10" cols="50" readonly
	style="background-color: #DDDDDD;"></textarea>`;
	}

	onLoad() {
		alert("test");
		var options = "";
		HANGMAN_DICTIONARY.forEach(word => options += "<option>" + word + "</option>");
		document.getElementById('inputWords').innerHTML = options;
	}	

	
	
}

module.exports = ExerciseImpl;