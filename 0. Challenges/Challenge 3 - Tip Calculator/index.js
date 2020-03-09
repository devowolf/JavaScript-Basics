/*
* Tip Calculator Challenge
*/

// Amounts paid in $
var paidAmounts = [124, 48, 268];
// Create a new empty array to store tip amounts given to waiters
var tipAmounts = new Array();

// Tip Calculator Function
function tipCalculator(bill) {

    // Declaring percentage variable
    var percentage;
    
    // Use Conditions to calculate the tip
    if(bill < 50) {
        percentage = .2;
    } else if(bill > 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }

    // cut the decimal value to only 2 values after the decimal point and return it
    return parseFloat( (bill * percentage).toFixed(2) );
}

// Modify both tipAmounts and paidAmounts arrays by calculating tips and adding them to each paid amount
for(i = 0; i < paidAmounts.length; i++) {
    tipAmounts.push( tipCalculator(paidAmounts[i]) );
    paidAmounts[i] = paidAmounts[i] + tipAmounts[i];
}

// Log all these results to the browser console
console.log('paidAmounts: ', paidAmounts);
console.log('tipAmounts: ', tipAmounts);