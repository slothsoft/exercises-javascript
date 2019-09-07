var module = function() {
	// so NodeJS syntax doesn't break the scripts
};

const exercises = [];

function createExerciseOverview() {
	var result = "";
	exercises.forEach(function(exercise) {
		result = result + "<a href=\"" + getExerciseUrl(exercise) + "\"><h2>" + exercise.displayName + "</h2></a>";
		
		if (exercise.shortDescription == null)
			result = result + "<p>" + exercise.description + "</p>";
		else
			result = result + "<p>" + exercise.shortDescription + "</p>";
	});
	return result;
}

function createExerciseList() {
	var result = "<ul>";
	result = result + "<li><a href=\"" + window.location.pathname + "\"><b>Overview</b></a></li><br>";
	exercises.forEach(function(exercise) {
		var a = "href=\"" + getExerciseUrl(exercise) + "\"";
		result = result + "<li><a " + a + ">" + exercise.displayName
				+ "</a></li>";
	});
	result += "</ul>";
	return result;
}

function createExerciseById(id) {
	var result = null;
	exercises.forEach(function(exercise) {
		if (exercise.id == id && result == null) {
			result = exercise;
		}
	});
	return result == null ? createExercise(exercises[0]) : createExercise(result);
}

function createExercise(exercise) {
	return "<iframe src=\"" + exercise.id + ".html\"></iframe>";
}

function createExerciseHeader(exercise) {
	var result = "<ul id='header-links'>";
	if (exercise.source != null)
		result += "<li><a href='" + exercise.source + "' target='_blank'>Exercise Source</a></li>";
	result += "<li><a href='http://github.com/slothsoft/exercises-javascript/blob/master/src/resources/js/" + exercise.id + ".js' target='_blank'>Source Code</a></li>";
	result += "</ul>";
	
	result += "<h1>" + exercise.displayName + "</h1>" +
			  "<p>" + exercise.description + "</p>"; 
	return result;
}



function getExerciseUrl(exercise) {
	return window.location.pathname + '?exercise=' + exercise.id;
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
