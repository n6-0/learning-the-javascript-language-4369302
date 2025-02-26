/**
 * Chapter 3.9 - Regular Expressions
 * Regular Expressions are way of extracting specific patterns from text
 */
let string1 = "This is the longest string ever.";
let string2 = "This is the shortest string ever.";
let string3 = "Is this the thing called Mount Everest?";
let string4 = "This is the Sherman on the Mount.";

// regular expressions are enclosed inside two backslashes: /regex/
// read the book mastering regular expession to better understand regular expressions
let regex = /this/;

// regex is an object in JavaScript
// this comes with a test() method
// regex's are case sensitive "this" !== "This"
regex.test(string1);
regex.test(string2);
regex.test(string3);
regex.test(string4);

/**
 * Using regular expression modifies (flags) to understand special cases
 * /exp/i: case insensitive
 * /^exp/: match at the beging of the string
 * /exp$/: match at the end of the string
 * /./: match any single character (wildcard)
 * /* /: match 0 or more of any character (wildcard)
 * /\.\: single slash is used to escape wildcards
*/

regex = /this/i; // ignore the case of regular expression
checkRegularExpressions(regex);

regex = /^this/i;
checkRegularExpressions(regex);

regex = /this$/i;
checkRegularExpressions(regex);

regex = /ever.$/i;

checkRegularExpressions(regex);
regex = /ever\.$/i;




// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
