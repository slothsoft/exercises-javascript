<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
	<?xml version="1.0" encoding="UTF-8"?>
	<!DOCTYPE html>
		<html>
			<head>
				<title>JavaScript Exercises</title>
				<link rel="stylesheet" type="text/css"
					href="resources/css/style.css" />
				<link rel="stylesheet" type="text/css"
					href="resources/css/test.css" />
				<meta charset="utf-8" />
			</head>
			<body>
			<div id="content">
				<div id="exercise-list">
					<ul>
						<li>
							<a href="index.html">
								<b>Overview</b>
							</a>
						</li>
						<li>
							<a href="https://github.com/slothsoft/exercises-javascript/">
								<b>GitHub</b>
							</a>
						</li>
						<li>
							<a href="index.html?exercise=random">
								<b>Random</b>
							</a>
						</li>
						<li>
							<a href="test.html">
								<b>Test Results</b>
							</a>
						</li>
					</ul>
				</div>
				<div id="selected-exercise">
					<xsl:for-each select="testsuites">
						<ul id="header-links">
							<li>
								<b>Runs: </b>
								<xsl:value-of select="@tests - @failures - @errors" />
								/
								<xsl:value-of select="@tests" />
							</li>
							<li>
								<span class="error">✘</span><b>Errors: </b>
								<xsl:value-of select="@errors" />
							</li>
							<li>
								<span class="failure">✘</span><b>Failures: </b>
								<xsl:value-of select="@failures" />
							</li>
						</ul>
						<xsl:for-each select="testsuite">
							<h1>
								<xsl:value-of select="@name" />
								<xsl:choose>
									<xsl:when test="@errors>0">
										<xsl:attribute name="class">error</xsl:attribute>
									</xsl:when>
									<xsl:when test="@failures>0">
										<xsl:attribute name="class">failure</xsl:attribute>
									</xsl:when>
									<xsl:otherwise>
										<xsl:attribute name="class">success</xsl:attribute>
									</xsl:otherwise>
								</xsl:choose>
							</h1>
							<ul class="testcases">
							<xsl:for-each select="testcase">
								<li>
									<xsl:choose>
										<xsl:when test="failure">
											<span class="failure">✘</span>
										</xsl:when>
										<xsl:when test="error">
											<span class="error">✘</span>
										</xsl:when>
										<xsl:otherwise>
											<span class="success">✔</span>
										</xsl:otherwise>
									</xsl:choose>
								
									<xsl:value-of select="@name" />
									
									<span class="time">
										(<xsl:value-of select="@time" />s)
									</span>
								</li>
							</xsl:for-each>
							</ul>
						</xsl:for-each>
					</xsl:for-each>
				</div>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>