const ExerciseGui = require("./exercise-gui.js");
exerciseGui = new ExerciseGui();

document.getElementById('exercise-list').innerHTML = exerciseGui.createExerciseList();

var urlParams = getParams(window.location.href);
if (urlParams['exercise'] == null)
	document.getElementById('selected-exercise').innerHTML = exerciseGui.createExerciseOverview();
else  {
	document.getElementById('selected-exercise').innerHTML = exerciseGui.createExerciseById(urlParams['exercise']);
	executeExercise();
}
	
/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */

function getParams(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
