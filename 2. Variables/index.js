// Variables

/*
* Variable names can't start with anything other than:
*    - dollar sign ($)
*    - underscores (_)
*    - alphabets(a-z, A-Z)
*/

var fullName = 'Sahil Saini'; // String
var userAge = 21; // Number
var fullAge = true; // Boolean
var undef; // Undefined

// Printing variables to console and type coercing it (changing their type to string using + sign)
console.log('fullName: ' + fullName + '\nuserAge: ' + userAge);
console.log('fullAge: ' + fullAge + '\nundef: ' + undef);

// A little test on changing value and data type of variables
undef = 'Hello'; // type: string
console.log('unDef (before changing data type):', undef);
undef = 20; // same variable, type: number
console.log('unDef (after changing data type):', undef);


// Let's ask user for an input and greet
var myName = prompt('Whats your name: ');
console.log('Hello, ' + myName + "!");