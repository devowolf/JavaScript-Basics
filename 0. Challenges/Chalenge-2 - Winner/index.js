// Challenge 2
// Take into account different points of Mark and John in different games and announce the winner

var maryAvg, johnAvg, markAvg;

// Calculate average for all teams
johnAvg = (89 + 120 + 103) / 3;
markAvg = (116 + 94 + 123) / 3;
maryAvg = (97 + 134 + 105) / 3;

// Calculate average and announce the winning team
if(johnAvg > markAvg && johnAvg > maryAvg) {
    console.log("John's Team WON!!, Average Score was: ", johnAvg);
} else if(markAvg > johnAvg && markAvg > maryAvg) {
    console.log("Mark's team WON!, Average Score was: ", markAvg);
} else if(maryAvg > johnAvg && maryAvg > markAvg) {
    console.log("Mary's team WON!, Average Score was: ", maryAvg);
} else { 
    console.log("The match was Draw");
}

