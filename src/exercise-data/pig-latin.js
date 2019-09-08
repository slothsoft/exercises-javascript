Exercise = require("../exercise.js");

class ExerciseImpl extends Exercise {

	constructor() {
		super('Pig Latin', 'Write function that translates a text to Pig Latin and back.');

		this.id = "pig-latin";
		this.description = 'Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay". "The quick brown fox" becomes "Hetay uickqay rownbay oxfay".';
		this.source = "https://adriann.github.io/programming_problems.html"; 
		this.script = 
			"var input = document.getElementById('input').value;\n"+
			"var result = executePigLatin(input);\n"+
			"document.getElementById('output').value = result;\n";
		this.html = `<h2>Input</h2>
<textarea id="input" rows="4" cols="50" onkeyup="executeExercise()">The quick brown fox</textarea>
<br />
<button onclick="executeExercise()">Execute</button>
<h2>Output</h2>
<textarea id="output" rows="6" cols="50" readonly style="background-color:#DDDDDD;"></textarea>`;
	}
	
}

module.exports = ExerciseImpl;