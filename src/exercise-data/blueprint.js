Exercise = require("../exercise.js");

class ExerciseImpl extends Exercise {

	constructor() {
		super('Title', 'Short description.');

		this.id = "blueprint"; // name of the corresponding class; optional (then display name is used)
		this.description = 'Longer description. You can delete this line if you don\'t need it.';
		this.source = null; // URL to the source; optional
		this.script = null; // some JavaScript to calculate the output from the input
		this.html = null; // some HTML to display output and input controls
	}
	
}

module.exports = ExerciseImpl;