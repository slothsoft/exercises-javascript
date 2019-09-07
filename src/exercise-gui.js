/**
 * This class generates the HTML for one or multiple exercises.
 */

class ExerciseGui {
	
	constructor() {
		this.exercises = require("./exercise-data.js");
	}
	
	createExerciseOverview() {
		var result = "";
		this.exercises.forEach(function(exercise) {
			result += "<a href=\"" + getExerciseUrl(exercise) + "\"><h2>" + exercise.getDisplayName() + "</h2></a>";
			result += "<p>" + exercise.getShortDescription() + "</p>";
		});
		return result;
	}

	createExerciseList() {
		var result = "<ul>";
		result += "<li><a href=\"" + window.location.pathname + "\"><b>Overview</b></a></li><br>";
		this.exercises.forEach(function(exercise) {
			var a = "href=\"" + getExerciseUrl(exercise) + "\"";
			result += "<li><a " + a + ">" + exercise.getDisplayName() + "</a></li>";
		});
		result += "</ul>";
		return result;
	}

	createExerciseById(id) {
		var result = null;
		this.exercises.forEach(function(exercise) {
			if (exercise.getId() == id && result == null) {
				result = exercise;
			}
		});
		return result == null ? createExercise(this.exercises[0]) : this.createExercise(result);
	}

	createExercise(exercise) {
		var result = "<ul id='header-links'>";
		if (exercise.getSource() != null)
			result += "<li><a href='" + exercise.getSource() + "' target='_blank'>Exercise Source</a></li>";
		result += "<li><a href='http://github.com/slothsoft/exercises-javascript/blob/master/src/resources/js/" + exercise.getId() + ".js' target='_blank'>Source Code</a></li>";
		result += "</ul>";
		result += "<h1>" + exercise.getDisplayName() + "</h1>";
		result += "<p>" + exercise.getDescription() + "</p>"; 

		if (exercise.html != null)
			result += exercise.html; 

		if (exercise.script != null) {
		    var script = document.createElement("script");
		    script.innerHTML = 'function executeExercise() { ' + exercise.script + '}';
		    document.getElementsByTagName("head")[0].appendChild(script);
		} 
		return result;
	}
}

function getExerciseUrl(exercise) {
	return window.location.pathname + '?exercise=' + exercise.getId();
}
function getMethods(obj) {
	  var result = [];
	  for (var id in obj) {
	    try {
	        result.push(id + ": " + obj[id].toString());
	    } catch (err) {
	      result.push(id + ": inaccessible");
	    }
	  }
	  return result;
	}

module.exports = ExerciseGui;
