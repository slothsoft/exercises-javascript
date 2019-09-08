
/**
 * This script should be used to copy a file and replace stuff while we're at
 * it.
 */

const fs = require('fs');
const encoding = 'utf8';

function copyReplace(inputFile, outputFile, replacements) {
	fs.readFile(inputFile, encoding, function(err, data) {
		if (err) {
			return console.log(err);
		}
		var result = data;
		if (replacements != null) {
			for (var key in replacements) {
				result = result.replace(key, replacements[key]);
			}
		}

		fs.writeFile(outputFile, result, encoding, function(err) {
			if (err)
				return console.log(err);
		});
	});
}

module.exports = copyReplace;