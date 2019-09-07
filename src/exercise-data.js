Exercise = require("./exercise.js");

const exercises = [];

var FramedWordExercise = require("./exercise-data/framed-words.js");
exercises.push(new FramedWordExercise());

module.exports = exercises;