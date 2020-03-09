/*
* Functional Statements and Expressions
*
* Expressions vs statements: https://en.hexlet.io/courses/intro_to_programming/lessons/expressions/theory_unit
*/

// Function Expression
var greetUser = function(name) {
    if(name)
    return "Hello, " + name + "!";

    return "error.";
}
// Execute the function, by using the variable name and passing arguments
console.log(greetUser(prompt("What's your name?")));