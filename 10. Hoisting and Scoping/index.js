/*
* Hoisting

* Hoisting is a JavaScript mechanism where variables and function declarations 
* are moved to the top of their scope before code execution. They can be used
* before they are actually defined!

* In hoisting, the function declarations are defined and the global context is scanned
* for any variables, and sets them all to "undefined", which means only functions are 
* accessible and if we try to access function expression, it will return an error.
* Read More: https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1
*/


// Function declaration
// Functions are defined before the execution phase starts, so we can access them before
// we declare them

greetUser('John'); // calling the function before it is defined below

function greetUser(userName) {
    console.log('Hello, ' + userName + '!');
}


// Let's try and access a variable before we define it
console.log(uName); // Returns undefined, before variables are defined in the execution phase

// Actually defining the variable
var uName = 'Jane';


// Try an access the function expression below
// foo(); // Returns an error


// function expression
var foo = function () {
    console.log(foo);
}



/*
* Scoping

* Scope determines where variables, functions or objects are accessible
* in an environment. Variable and function defined in the global context
* are accessible to all child functions, but the variable, objects etc defined
* within the child function will not be accessible from the global context!
* Read More: https://medium.com/backticks-tildes/understanding-hoisting-and-scoping-in-javascript-39ea7b41e31
*/


// Let's use an example of functions

// Defining a variable in the global context
var x = 'Hi!';

function first() {

    // Defining a local variable
    var y = 'Hello!';
    child(); // Call the function below


    function child() {
        var z = 'Hey!';

        // Variables of the parent function and scope's are accessible here!
        console.log(x, y, z);
    }
}

// Calling the first() function to see the output
first();

// if we try to use variable defined within the scope of a child bloc
console.log(y); // returns an error