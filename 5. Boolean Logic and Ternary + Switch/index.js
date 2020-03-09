/*
* Boolean logic, Ternary operator and Switch-case Statements
*/

// Boolean Logic
// && (AND)
// || (OR)
// ! (NOT)
console.log('Boolean Logic:\n');
var a = true;
var b = false;

console.log('a && b: ', a && b); // AND
console.log('a || b: ', a || b); // OR
console.log('!a: ', !a); // NOT

//Ternary Operator
console.log('\nTernary Operator:\n\n');
a == b ? console.log('a == b') : console.log('a != b');

// Switch-Case
console.log('\nSwitch Statement:\n\n');
switch(a != b) {
    case true:
        console.log('a != b is true');
        break;
    case false:
        console.log('a != b is false');
        break;
}