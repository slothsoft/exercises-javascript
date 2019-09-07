Exercise = require("../exercise.js");

class ExerciseImpl extends Exercise {

	constructor() {
		super('Framed Words', '<p>Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.</p>');

		this.description = '<p>Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list <code>["Hello", "World", "in", "a", "frame"]</code> gets printed as:</p><img src=\"resources/images/framed-words.png\"/>'
		this.source = 'https://adriann.github.io/programming_problems.html';
		this.script = `
			var input = document.getElementById('input').value.split(/[\\r\\n]+/);
			var result = executeFramedWords(input);
			document.getElementById('output').value = result.join("\\n");`;
		this.html = `<h2>Input</h2>
<textarea id="input" rows="4" cols="50">Hello
World
in
a
frame</textarea>
<br />
<button onclick="executeExercise()">Execute</button>
<h2>Output</h2>
<textarea id="output" rows="6" cols="50" readonly style="background-color:#DDDDDD;"></textarea>`;
	}
	
}

module.exports = ExerciseImpl;