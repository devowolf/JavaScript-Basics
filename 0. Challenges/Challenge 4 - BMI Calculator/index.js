/*
* BMI Calculator
*/

// Details of John
var john = {
    fullName: 'John Smith',
    height: 2.0,
    mass: 70,
    calcBMI: function() {
        // Calculate BMI and create a value, then assign.
        this.bmi = this.mass / ( this.height*this.height );
        return this.bmi;
    }
}

// Details of Mark
var mark = {
    fullName: 'Mark Matt',
    height: 1.8,
    mass: 80,
    calcBMI: function() {
        // Calculate BMI and create a value, then assign.
        this.bmi = this.mass / ( this.height*this.height );
        return this.bmi;
    }
}

// Calculate BMI for both in the first if block and then we can use the bmi values
if( john.calcBMI() > mark.calcBMI() ) {
    console.log(john.fullName + "'s BMI is higher than mark's. BMI is " + john.bmi);
} else if( john.bmi < mark.bmi ) {
    console.log(mark.fullName + "'s BMI is higher than mark's. BMI is " + mark.bmi);
} else {
    console.log("Both have the BMI.");
}