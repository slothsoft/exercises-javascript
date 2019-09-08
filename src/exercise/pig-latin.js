function executePigLatin(input) {
	if (input == null || input == "")
		return input;
	var result = "";
	input.split(/\s+/).forEach(function(element) {
		if (result != "")
			result += " ";
		result += executePigLatinOnWord(element);
	});
	return result;
};

function executePigLatinOnWord(input) {
	const suffix = "ay";
	var firstLetter = input.charAt(0);
	var restOfWord = input.slice(1);
	if (restOfWord == "")
		return firstLetter + suffix;
	
	var firstLetterCapital = firstLetter.toUpperCase() == firstLetter;
	var result = restOfWord + firstLetter.toLowerCase() + suffix;
	
	if (firstLetterCapital) {
		result = result.charAt(0).toUpperCase() + result.slice(1);
	}
	return result;
}
module.exports = executePigLatin;