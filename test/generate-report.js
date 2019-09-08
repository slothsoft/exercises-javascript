require("qunit-reporter-junit");
const fs = require('fs');

QUnit.jUnitDone(function(report) {
	console.log("Generated test XML.");

	var xmlFolder = './temp/';

	if (!fs.existsSync(xmlFolder)){
	    fs.mkdirSync(xmlFolder);
	}
	var xmlFile = xmlFolder + 'test-report.xml';
	fs.writeFile(xmlFile, report.xml, 'utf-8', function(err) {
		if (err)
			return console.log(err);

		console.log("Exported to file: " + xmlFile);
		
		require('../script/generate-test-report.js');
	});
});