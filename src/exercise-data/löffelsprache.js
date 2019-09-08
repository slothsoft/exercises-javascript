Exercise = require("../exercise.js");

class ExerciseImpl extends Exercise {

	constructor() {
		super('Spoon Language', 'The spoon language is the German pig latin. The language is based on the exchange of the vowels of a word by fixed abbreviations, whereby the consonants of the word remain untouched.');

		this.id = 'löffelsprache'; // name of the corresponding class; optional (then display name is used)
		this.description = '<p>The spoon language (German: <i>Löffelsprache</i> is the German pig latin. The language is based on the exchange of the vowels of a word by fixed abbreviations, whereby the consonants of the word remain untouched.</p><p>Basically it is about inserting the syllable lew after each vowel (a, e, i, o, u), diphthong (au, ie, ei etc.) or umlaut (ä, ö, ü) and then the vowel, diphthong or Use umlaut again. For example, the noun Uhu becomes ulewu-h-ulewu. The vowel u was replaced by ulewu, whereas the consonant, that is, the h, remained untouched. From car, for example, would become aulewau-t-olewo.</p>';
		this.source = 'https://monsterliterature.com/spoon-language/'; 
		this.script = 
			"var input = document.getElementById('input').value;\n"+
			"var result = executeLöffelsprache(input);\n"+
			"document.getElementById('output').value = result;\n";
		this.html = `<h2>Input</h2>
<textarea id="input" rows="4" cols="50" onkeyup="executeExercise()">Das ist die Löffelsprache</textarea>
<br />
<button onclick="executeExercise()">Execute</button>
<h2>Output</h2>
<textarea id="output" rows="6" cols="50" readonly style="background-color:#DDDDDD;"></textarea>`;
	}
	
}

module.exports = ExerciseImpl;