
/**
 * This script takes the file "base-readme.md" and appends all the exercises at the tag "exercises".
 */

var copyReplace = require('./copy-replace.js')

var replacements = { '<exercises>': generateExercises() };
copyReplace('script/base-readme.md', 'README.md', replacements);

function generateExercises() {
	var result = "";
	
	var exercises = require("../src/exercise-data.js");
	exercises.forEach(function(exercise) {
		result += "- **[" + exercise.getDisplayName() + "]";
		result += "(https://slothsoft.github.io/exercises-javascript/?exercise=" + exercise.getId() + ")**";
		result += " - " + exercise.getShortDescription();
		result += "\n";
	});
	return result;
}