/*
* LOOPS AND ITERATORS
*
* Three types of loops are:
* for loop
* while loop
* do-while loop
*/

// Sample array, to iterate over
var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For loop
for(i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}

// While loop
// Same implementation, but now, print the list in reverse
var count = sampleArray.length - 1;
while( count >= 0 ) {
    console.log( sampleArray[count] );
    count--;
}

// do-while loop, runs at least once
// print ascii characters, until 75 (H)
var count1 = 65;
do {
    console.log( String.fromCharCode(count1) ); // use fromCharCode to convert number to ascii character
    count1++; // increase the counter
} while( count1 < 73 );