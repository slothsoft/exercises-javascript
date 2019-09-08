
const fs = require('fs');
const xsltProcessor = require('xslt-processor');
const encoding = 'utf8';

fs.readFile('./script/test-report.xsl', encoding, function(err, xsd) {
	if (err) {
		return console.log(err);
	}
	fs.readFile('./temp/test-report.xml', encoding, function(err, xml) {
		if (err) {
			return console.log(err);
		}
		var htmlDocument = xsltProcessor.xsltProcess(
				xsltProcessor.xmlParse(xml),
				xsltProcessor.xmlParse(xsd)
		);

		var file = './dist/test.html';
		fs.writeFile(file, htmlDocument, encoding, function(err) {
			if (err)
				return console.log(err);
			console.log("Wrote test report to file: " + file);
		});
	});
});
