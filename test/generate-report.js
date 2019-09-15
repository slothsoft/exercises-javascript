require("@slothsoft/qunit-reporter").fromQUnit().toHtml({
	xslFile : "script/test-report.xsl",
    file : "dist/test.html",
});