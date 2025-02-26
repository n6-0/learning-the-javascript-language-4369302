/**
 * Chapter 3.5 - Arrays
 * Arrays are a collection of data that stores it order
 */

// Creating an Array
var myArray = []; // Array literal notation
myArray;

/**
 * Array in javaScript are special objects, 
 * They do have keys, but they are just not displayed on the screen
 * All the values in an array have a specified order that is preserved
 */
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday"];
daysOfTheWeek;

// JavaScript Arrays are heterogenous, they can hold multile types of data
var myList = [0, 1, 2, "string1", "string2", "string3", true, false];
myList;

var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];
counties;

var listOfStuff = [{ name: "value" }, [1, 2, 3], true, "nifty"];
listOfStuff;
listOfStuff.length; // property that holds the number of element in an array

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
