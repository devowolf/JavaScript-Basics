/*
    Objects (Advanced)
*/

// Function Constructor
var Person = function(firstName, lastName, yearOfBirth, job) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.yearOfBirth = yearOfBirth,
    this.job = job
};

// Add a method to the prototype of the constructor function
Person.prototype.calculateAge = function() {
    return 2020 - this.yearOfBirth;
}

// We can also add properties to the prototype, just like we did above with a method
// Each instance of object are going to have the same property
Person.prototype.isRetired = false;


var john = new Person('John', 'Smith', 1990, 'System Engineer');

console.log(john); // Log the whole instance to the console

// We can use the calculateAge function, as its in the prototype of the person object
// and john is an instance of person object
console.log(john.calculateAge());
console.log(john.isRetired);

john.isRetired = true; // We can update this property too


// We can create as many instances (objects) from the object as we want
var mike = new Person('Michael', 'Miller', 1991, 'Developer');
var jane = new Person('Jane', 'Smith', 1992, 'Designer');

console.log("Mike: ", mike, "\nJane: ", jane);

/*
    * Object.create()
*/

// Another way of creating objects that inherit directly from the parent, using Object.create() method
var personPrototype = {
    calcAge: function() {
        return (2020 - this.yearOfBirth);
    }
}

// Create an person object from above specified prototype
var sahil = Object.create(personPrototype, {
    name: { value: 'Sahil Saini' },
    yearOfBirth: { value: 1999 },
    job: { value: 'Developer' }
});

console.log(sahil);

// Add properties to the object explicitly, rather than using the second argument of Object.create()
var harman = Object.create(personPrototype);
harman.name = 'Harman Saini';
harman.yearOfBirth = 2001;
harman.job = 'Student';

console.log(harman);
