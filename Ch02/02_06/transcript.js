// This is a transcript of the lines of code from the lesson.
// You can copy and paste each line into a JavaScript console to execute it and see the result.

// Chapter 2.6 - Mutability
// variabels defined with const keyword are immutable, they cannot be changed
const dozen = 12, halfDozen = 6, bakersDozen = 13;

dozen = 13; // this line will throw an error, because it is attempting to change an immutable variable value

// keywords var and let are used to create mutable variables
var cookieCount = 5; // var uses function scope, where as
let cookieCount = 5; // let uses block scope

// More info:
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const