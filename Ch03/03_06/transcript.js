/**
 * Chapter 3.4 - Array Manipulation
 * 1. Array Index
 * 2. Modifying Data
 * 3. Dynamic Array
 */
var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

// 1. Index
counties[0]; // Aray index are zero based
counties[2];

counties[2] = "Cheshire"; // replacing the value at 2nd index or 3 = (2 + 1) position the array
counties;

// 2. Dynamic Array
// Arrays in JavaScript can their size
counties[4] = "Carroll"; // this create index in the array at position 4+1=5 and assign it the value "Carroll"
counties;

// using the lenght property to add an element to the end of the array
counties[counties.length] = "Merrimack";
counties;

/**
 * JavaScript methods uses some stack methods
 */
// push is an Arrya method, that lets you add an element at the end of an array.
counties.push("Coos");
counties;

// Arrya.pop(), removes and return the last element in the array
counties.pop();

/**
 * Array.shift() - removes an element from the front of the array
 * Array.unshift() - adds an element to the front of the array
 */


// removing a element using its index
delete counties[2]; // this will only remove the element data at the specified index, but will not delete the index itself
counties;

// Array.splice(i, n): removes elements an specific indices and returns them
// first parameter i, specifies the start index at which you want the element removed
// second parameter n, specifies the number of elements you want to remove from the array
counties.splice(2, 1);
counties;
counties.length;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
