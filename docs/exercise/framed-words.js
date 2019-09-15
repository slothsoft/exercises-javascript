function executeFramedWords(input) {
	var maxLength = 0;
	input.forEach(function(line) {
		maxLength = Math.max(maxLength, line.length);
	});
	var border = "*";
	var space = " ";
	
	var result = [ border.repeat(maxLength + 4) ];
	input.forEach(function(line) {
		result.push(border + space + line + space.repeat(maxLength - line.length + 1) + border);
	});
	result.push(result[0]);
	return result;
};
module.exports = executeFramedWords;