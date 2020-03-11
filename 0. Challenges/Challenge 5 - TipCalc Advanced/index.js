/*
* Tip Calculator (Advanced)
*/

// An object created for john's family including all the bills and a method for calculating amounts
var john = {
    fullName: 'John Smith',
    paidAmounts: [124, 48, 268, 180, 42],
    tipAmounts: new Array(),
    finalAmounts: new Array(),
    tipCalculator: function() {
        // Iterate through the array and calculate amounts for both new arrays
        for( i = 0; i < this.paidAmounts.length; i++ ) {
            // Variable declaration to store the percentage value for tip
            var percentage;

            // Calculate the percentage
            if( this.paidAmounts[i] < 50 ) {
                percentage = .2;
            } else if ( this.paidAmounts[i] > 50 && this.paidAmounts[i] < 200 ) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add new calculated values to both arrays
            // Floor tipamounts' value to two points after the decimal (just for convenience)
            this.tipAmounts.push( parseFloat( ( this.paidAmounts[i] * percentage ).toFixed( 2 ) ) );
            this.finalAmounts.push( this.tipAmounts[i] + this.paidAmounts[i] );
        }

    }
}

// Another object for mark's family, with the same functionality and code, but different amounts and values!
var mark = {
    fullName: 'Mark Miller',
    paidAmounts: [77, 375, 110, 45],
    tipAmounts: new Array(),
    finalAmounts: new Array(),
    tipCalculator: function() {
        // Iterate through the array and calculate amounts for both new arrays
        for( i = 0; i < this.paidAmounts.length; i++ ) {
            // Variable declaration to store the percentage value for tip
            var percentage;

            // Calculate the percentage
            if( this.paidAmounts[i] < 100 ) {
                percentage = .2;
            } else if ( this.paidAmounts[i] > 100 && this.paidAmounts[i] < 300 ) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add new calculated values to both arrays
            // Floor tipamounts' value to two points after the decimal (just for convenience)
            this.tipAmounts.push( parseFloat( ( this.paidAmounts[i] * percentage ).toFixed( 2 ) ) );
            this.finalAmounts.push( this.tipAmounts[i] + this.paidAmounts[i] );
        }

    }
}

// Execute tipCalculator for both objects
john.tipCalculator();
mark.tipCalculator();

// Function to calculate average tip
function calcAverage( tipArray ) {
    var sum = 0;
    
    // Iterate over every item in the array and add its value to 'amount'
    for( i = 0; i < tipArray.length; i++ ) {
        sum += tipArray[i];
    }

    return ( sum / tipArray.length );
}

// Calculate average for both families and store it in variables
john.averageTip = calcAverage( john.tipAmounts );
mark.averageTip = calcAverage( mark.tipAmounts );

// Decide who gave the highest tip and log it to the console
if( john.averageTip > mark.averageTip ) {
    console.log( john.fullName + '\'s family gave the highest tip, with an average tip of ' + john.averageTip );
} else if( john.averageTip < mark.averageTip ) {
    console.log( mark.fullName + '\'s family gave the highest tip, with an average tip of ' + mark.averageTip );
} else {
    console.log( 'Both families gave the same amount of tip.' );
}

// Log initial, tip and final amounts to the console for both families
console.log( '\nJohn\'s Amounts: ' );
console.log( 'paidAmounts:', john.paidAmounts );
console.log( 'tipAmounts:', john.tipAmounts );
console.log( 'finalAmounts:', john.finalAmounts );

console.log( '\nMark\'s Amounts: ' );
console.log( 'paidAmounts:', mark.paidAmounts );
console.log( 'tipAmounts:', mark.tipAmounts );
console.log( 'finalAmounts:', mark.finalAmounts );