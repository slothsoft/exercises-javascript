Exercise = require("./exercise.js");

const exercises = [];

var Exercise = require("./exercise-data/framed-words.js");
exercises.push(new Exercise());

Exercise = require("./exercise-data/pig-latin.js");
exercises.push(new Exercise());

Exercise = require("./exercise-data/löffelsprache.js");
exercises.push(new Exercise());

Exercise = require("./exercise-data/hangman-ai.js");
exercises.push(new Exercise());

// add new exercises here

exercises.sort(function(o1, o2){ return o1.getDisplayName() < o2.getDisplayName() ? -1 : 1; });
module.exports = exercises;