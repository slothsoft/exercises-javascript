
/**
 * This is supposed to make generating a new exercise easy. You only need to
 * enter the ID.
 */

const copyReplace = require('./copy-replace.js')
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question(`What is the new exercise's ID?`, (id) => {
	createNewExercise(id);
	readline.close();
});

function createNewExercise(id) {
	var replacements = { 'blueprint': id };
	copyReplace('src/exercise/blueprint.js', 'src/exercise/' + id + '.js', replacements);
	copyReplace('src/exercise-data/blueprint.js', 'src/exercise-data/' + id + '.js', replacements);
	copyReplace('test/exercise/blueprint-test.js', 'test/exercise/' + id + '-test.js', replacements);
	
	replacements = { '// add new exercises here': 'Exercise = require("./exercise-data/' + id + '.js");\nexercises.push(new Exercise());\n\n// add new exercises here' };
	copyReplace('src/exercise-data.js', 'src/exercise-data.js', replacements);
}
