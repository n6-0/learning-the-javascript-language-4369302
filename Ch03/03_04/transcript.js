// Chatper 3.4 - Jargon: References
var animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};
animal;

// Assigning a existing object to a variable does not create a new object.
var animal2 = animal; // This creates a reference(shallow copy) of the object animal.

animal2; // All the properties are the same

// The two variables are pointing to the same memory location
animal2.genus = "ursus"; // this will create change to the original aniamls object
animal2;
animal;

// using a object literal will create an entirely new object
animal2 = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky", // there is a deliberate bug here in the course, removed for your convenience :)
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

// bonus: make a copy of an object safely

// using assing() method from the Object class
/**
 * These methods/oparation create a deep copy(),
 * They copy all the contents of an object and paste them in a new memory address
 * making changes to one copy will not have any effect on the other object
 */
animal2 = Object.assign({}, animal); // creates an empty object and coplies all the properties of animal to empty copy.
animal2 = { ...animal }; // spead operator, spead out all the date in an object and the assign it to a new object identifier.
animal2 = JSON.parse(JSON.stringify(animal)); // using the JSON class's JSON object
// JSON object mimic JavaScript object but are written in text.
animal2.genus = "ursus";
animal2;
animal;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
