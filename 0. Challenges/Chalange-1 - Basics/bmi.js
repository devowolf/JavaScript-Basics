// Heights in Meters
var markHeight = 1.8;
var johnHeight = 2.0;
// Weight of both
var markWeight = 70;
var johnWeight = 80;

var johnBMI = johnWeight / (johnHeight*johnHeight);
var markBMI = markWeight / (markHeight*markHeight);

if(johnBMI > markBMI) {
    console.log('John\'s BMI is Greater than Mark\'s');
} else {
    console.log('Mark\'s BMI is greater than John\'s');
}