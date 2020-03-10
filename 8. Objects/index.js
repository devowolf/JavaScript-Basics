/*
* Objects and Properties
*/

// Object Literals
// they store values like arrays, but here we can access values with names rather than their index
var userInfo = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1999,
    job: 'developer',
    isMarried: false,
    family: ['emily', 'john', 'matthew', 'jack', 'ben']
};

console.log(userInfo); // Log the object to the console

// Two ways we can access values from an object
console.log('fullName: ' + userInfo.firstName + " " + userInfo.lastName); // First way, using dot notation (.property)
console.log("Family Members: ", userInfo['family']); // Second way, using a pair of brackets (bracket notation)

// We can also mutate or update values in an object using the same dot or bracket notation
userInfo.job = 'designer';
console.log("After updating, userInfo.job:", userInfo.job); // Test that the value is actually updated


// Another way of creating object
var userProfile = new Object();

// Now, let's add some values to the object we created above
userProfile.job = 'Developer';
userProfile.experience = '5 Years';
userProfile.skillSet = {
    languages: ['C++', 'Python', 'JavaScript'],
    otherSkills: ['Designing', 'Video Editing']
};

// Let's print this to the console and test if the values were added to the object
console.log(userProfile);

// the way to access nested values
console.log(userProfile.skillSet.languages); // or you can use userProfile['skillSet']['languages']


/*
* Object Methods
*/


// We can create a method the same way we created properties in the empty object above
// Let's create a method to check if the person has right skill set for the job
// We will create this method like a function expression, as we created in functional statements and expressions
userProfile.hasRightSkill = function(skill) {
    return this.skillSet.languages.indexOf(skill) == -1 ? false : true; // 'this' is used to refer to the current object
}

// Let's Log it to the console and see if it works!
console.log('does user knows the Swift language?' , userProfile.hasRightSkill('Swift'));