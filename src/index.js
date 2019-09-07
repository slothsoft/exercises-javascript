const ExerciseGui = require("./exercise-gui.js");
const url = require('url');

var exerciseGui = new ExerciseGui();
document.getElementById('exercise-list').innerHTML = exerciseGui.createExerciseList();

var urlParams = url.parse(window.location.href, true).query;
if (urlParams.exercise == null) {
	// show a list of exercises with a short description
	document.getElementById('selected-exercise').innerHTML = exerciseGui.createExerciseOverview();
} else {
	// show a specific exercise and init it
	document.getElementById('selected-exercise').innerHTML = exerciseGui.createExerciseById(urlParams.exercise);
	executeExercise();
}