function executeLöffelsprache(input) {
	if (input == null || input == "")
		return input;
	var result = "";
	input.split(/\s+/).forEach(function(element) {
		if (result != "")
			result += " ";
		result += executeLöffelspracheOnWord(element);
	});
	return result;
};

function executeLöffelspracheOnWord(input) {
	var result = "";
	
	var index = 0;
	var match;
	while (match = /(au|ei|ie|[aeiouäöü])/i.exec(input.slice(index))) {
		// append consonants up to match
		result += input.slice(index, index + match.index);
		
		// extract vowel and modify it
		var matchedString = match[0];
		result += getReplacementForVowel(matchedString);
		
		// move index forward
		index += match.index + matchedString.length;
	}
	result += input.slice(index);
	return result;
}

function getReplacementForVowel(input) {
	return input + 'lew' + input.toLowerCase();
}

module.exports = executeLöffelsprache;