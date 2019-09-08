/**
 * This class generates the HTML for one or multiple exercises.
 */

class ExerciseGui {
	
	constructor() {
		this.exercises = require("./exercise-data.js");
	}
	
	createExerciseOverview() {
		var result = "<ul id='header-links'>";
		result += "<li><a href='https://github.com/slothsoft/exercises-javascript/'>GitHub</a></li>";
		result += "<li><a href='" + window.location.pathname + "?exercise=random'>Random</a></li>";
		result += "</ul>";
		
		this.exercises.forEach(function(exercise) {
			result += "<a href=\"" + getExerciseUrl(exercise) + "\"><h2>" + exercise.getDisplayName() + "</h2></a>";
			result += "<p>" + exercise.getShortDescription() + "</p>";
		});
		return result;
	}

	createExerciseList() {
		var result = "<ul id='sidebar'>";
		result += "<li><a href=\"" + window.location.pathname + "\"><b>Overview</b></a></li>";
		result += "<li><a href=\"https://github.com/slothsoft/exercises-javascript/\"><b>GitHub</b></a></li>";
		result += "<li><a href='" + window.location.pathname + "?exercise=random'><b>Random</b></a></li>";
		result += "<br>";
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
		if (result == null) {
			var randomIndex = Math.random() * this.exercises.length;
			var exercise = this.exercises[Math.floor(randomIndex)];
			var result = this.createExercise(exercise);
			window.document.title = "Random Exercise"; 
			return result;
		}
		return this.createExercise(result);
	}

	createExercise(exercise) {
		window.document.title = exercise.getDisplayName();
		
		var result = "<ul id='header-links'>";
		if (exercise.getSource() != null)
			result += "<li><a href='" + exercise.getSource() + "'>Exercise Source</a></li>";
		result += "<li><a href='http://github.com/slothsoft/exercises-javascript/blob/master/src/exercise/" + exercise.getId() + ".js'>Source Code</a></li>";
		result += "<li><a href='http://github.com/slothsoft/exercises-javascript/blob/master/test/exercise/" + exercise.getId() + "-test.js'>Tests</a></li>";
		result += "</ul>";
		result += "<h1>" + exercise.getDisplayName() + "</h1>";
		result += "<p>" + exercise.getDescription() + "</p>"; 
		result += exercise.getHtml(); 
		
		// hook scripts to execute the exercise
		var head = document.getElementsByTagName("head")[0]

		// TODO: I'd love to have the actual script tag here too
		// (index.html around line 13)
		
		var executeScript = document.createElement("script");
		executeScript.innerHTML = 'function executeExercise() { ' + exercise.script + '\n}';
		head.appendChild(executeScript);
		
		return result;
	}
}

function getExerciseUrl(exercise) {
	return window.location.pathname + '?exercise=' + exercise.getId();
}

module.exports = ExerciseGui;
