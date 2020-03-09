/*
* Tip Calculator Challenge
*/

// Amounts paid in $
var paidAmounts = [124, 48, 268];

// Tip Calculator Function
function tipCalculator(arr) {
    var tips = new Array();
    for(i = 0; i < arr.length; i++) {
        tips.push( parseFloat( (arr[i] * 0.2).toFixed(2) ) );
    }
    return tips;
}
// Create the tipAmounts array and assign it the values returned by the function
var tipAmounts = tipCalculator(paidAmounts);

// Update the paidAmounts array by adding tips to each value
for(i = 0; i < paidAmounts.length; i++) {
    paidAmounts[i] = paidAmounts[i] + tipAmounts[i];
}

// Log all these results to the browser console
console.log('paidAmounts: ', paidAmounts);
console.log('tipAmounts: ', tipAmounts);