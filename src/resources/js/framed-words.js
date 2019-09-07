var FramedWordsExercise = function() {}
FramedWordsExercise.prototype.id = 'framed-words';
FramedWordsExercise.prototype.displayName = 'Framed Words';
FramedWordsExercise.prototype.shortDescription = '<p>Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.</p>';
FramedWordsExercise.prototype.description = '<p>Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list <code>["Hello", "World", "in", "a", "frame"]</code> gets printed as:</p><img src=\"resources/images/framed-words.png\"/>';
FramedWordsExercise.prototype.source = 'https://adriann.github.io/programming_problems.html';
FramedWordsExercise.prototype.execute = function(input) {
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
module.exports = FramedWordsExercise.prototype.execute;