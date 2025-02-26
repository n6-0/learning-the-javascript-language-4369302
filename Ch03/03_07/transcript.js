/**
 * Chapter 3.6 - Readibility
 * How to use white spaces in code to make it more readable for others
 */

// this syntax works but it is not readable
var year=2012,month='October',day=31,holiday='Halloween';

// inconsistent white space
var year   = 2012,       month    =    'October', day =          31,          holiday='Halloween';

// using newline and indents
var year = 2012,
	month = 'October',
	day = 31,
	holiday = 'Halloween';
	
// 
var year  = 2012,
	month   = 'October',
	day     = 31,
	holiday = 'Halloween';

// unreadable creation of objects
var tinyAlmanac={'year':2012,'month':'October','day':31,'holiday':'Halloween'};

// using newline and commas in object creation
var tinyAlmanac = {
	'year' : 2012,
	'month' : 'October',
	'day' : 31,
	'holiday' : 'Halloween'
};

// using newline lines and backslashes for String creation
// All the text in "..." is a part of a single string
var longString = "Four score \
and seven years ago \
our fathers brought forth \
on this continent \
a new nation";

// More info:
// These are not specifications on whitespace, but the Mozilla code style guide discusses formatting.
// https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#choosing_a_format
