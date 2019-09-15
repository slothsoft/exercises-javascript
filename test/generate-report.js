require("@slothsoft/qunit-reporter").fromQUnit().toHtml({
	xslFile : "script/test-report.xsl",
    file : "docs/test.html",
});