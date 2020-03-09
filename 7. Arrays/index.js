/*
* Arrays
*/

// One way of creating arrays is using the square brackets
var names = ['John', 'Mark', 'Ben'];
// Another way of creating arrays
var years = new Array(1999, 2001, 2000);

console.log(names); // Print the whole array to the console
console.log(names[0]); // Print the first element to the console, arrays start at index 0

// Assign new value to an index
names[2] = 'Jane';

// Add one more item to the array (grow the array)
names[names.length] = 'Mary';

// After assignment
console.log(names);

// We can have array with different data types
var markInfo = ['Mark', 'Smith', 1996, 'teacher'];

console.log(markInfo);

// Now, let's look at some of the methods for modifying arrays

// .push(value) - Add an item to the end of the array
names.push('Ben');

// .unshift(value) - Adds a new item to the beginning of the array
names.unshift('Josh');

// let's see the result
console.log(names);

// .pop() - Remove the last element form array (and returns it)
names.pop();

// .shift() - Removes the first element in the array (and returns it)
names.shift();

console.log(names);

// indexOf(value) - returns the index of an item in the array
console.log(names.indexOf('Jane'));
// Returns negative index if item is not present in the array
console.log(names.indexOf('Sahil'));