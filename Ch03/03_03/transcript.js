// Chapter 3.3 - Manipulating Objects
// all the keys of an object are strings
var bird = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};

bird.quote; // dot notation, quotation marks are not required 
bird."quote"; // this does not work

bird["quote"];  // using square bracket notation requires quotion marks aroud the key
bird[quote]; // this will throw a reference error

// the same two notation can be used to change the values of different keys
bird.color = "black"; // changing the value of a key
bird["color"] = green;

bird;

// Adding new protperties to an object
bird["where it lives"] = "in a tree"; // since there are spaces in this key, it requires a square bracket notation
bird.whereItLives = "in a tree"; // this will create a different proptery that the one above.
bird.whereItLives;
bird['whereItLives'];

delete bird.color; // removing a property from on object using a key
bird;

/**
 * Remember the JavaScript Objects do not use array operations,
 * They use key value operations
 */
// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object