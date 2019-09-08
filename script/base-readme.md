# Exercises in JavaScipt

[![MIT Licence](https://img.shields.io/github/license/jenkinsci/java-client-api.svg?label=License)](http://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/slothsoft/exercises-javascript.svg?branch=master)](https://travis-ci.org/slothsoft/exercises-javascript)

- **Author:** [Stef Schulz](mailto:s.schulz@slothsoft.de)
- **Repository:** <https://github.com/slothsoft/exercises-javascript>
- **Open Issues:** <https://github.com/slothsoft/exercises-javascript/issues>
- **Website:** [http://app.slothsoft.de](http://app.slothsoft.de/exercises-javascript)
- **Test Report:** [http://app.slothsoft.de](http://app.slothsoft.de/exercises-javascript/test.html)

A couple of programming exercises I thought would be fun to try.

**Content:**
- [New Exercise](#new-exercise)
- [Exercises](#exercises)
- [Test Report](#test-report)



## New Exercise

It's not perfect yet, but for a new exercise do:

1. Create a new exercise in _src/exercise/<exercise>.js_
1. Create the test in test/exercise/<exercise>-test.js_
1. Create the data (name and HTML mostly) for this exercise in  _src/exercise-data/<exercise>.js_
1. Add an implementation of your exercise to _src/exercise-data.js_
1. Add the copied exercise file as a script to the _index.html_

Or you can use the script `node script/create-new-exercise.js` which does everything but the last step for you. 



## Exercises

<exercises>



## Test Report

I'm really proud of my test report ([live version](http://app.slothsoft.de/exercises-javascript/test.html)):

![test-report](readme/test-report.png)

To see how it is generated see this _[XSL Transformation File](script/test-report.xsl)_ and this _[NodeJS generator](script/generate-test-report.js)_.