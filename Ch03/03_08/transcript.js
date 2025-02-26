/**
 * Chapter 3.8 - Comments
 * Comments are text in the code that is not interpreted by the java runtime environment
 * Comment are used to make the code more readable and explain it to others
 * 
 * Comment are also used to documentation
 * Documentation helps programmer undertand a specific function does
 */

// Single line comment
// another after the slashes does not execute
var year = 2012,
  month = "October", // this is the month
  // day = 31,
  holiday = "Halloween";


// Block Comments
/*
You can write comments
across multiple lines
finally ending with:
*/

var tinyAlmanac = {
  year: 2012,
  month: "October",
  day: 31,
  holiday: "Halloween"
};

// Difference between block comment and regular expression
// watch out for block comments here
var myRegExp = /[0-9].*/;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments
