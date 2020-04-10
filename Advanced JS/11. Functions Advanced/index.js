/*
    IIFE - Immediately Invoked Function Expressions
*/

// Rather than writing a function and calling it, we can create an IIFE
(function() {
    console.log('Hello there!');
})(); // function is invoked by using these set of parenthesis at the end

// We can also pass parameters to these function expressions
(function (name) {
    console.log('Greetings from ' + name);
})('Sahil');


/*
    Closures
*/

// This basically means that a function's parameters or variables still remain in the scope
// chain, if required by the returned function
function userProfession(job) {
    // Function expects a string, return -1 if not a string
    if(typeof job !== 'string') {
        return -1;
    }

    // return the function to the user
    return function(name) {

        // see how the variable job can be used, even when the userProfession function has returned
        if(job.toLowerCase() === 'designer') {
            console.log(name + ' is a designer.');
        } else if(job.toLowerCase() === 'programmer') {
            console.log(name+ ' is a coder!');
        } else {
            console.log('What\'s your profession, again?')
        }

    }
}

// A function is returned when a string is passed, job variable is still usable
var designer = userProfession('Designer');
designer('John');

// we can execute function directly, without having do declare another variable and calling it
// functions are executed from left to right, so the below code is perfectly valid
userProfession('Programmer')('Mark');