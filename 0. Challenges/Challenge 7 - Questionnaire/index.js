/*
    Questionnaire Game
*/


// Create a function constructor
function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

// Define a function to display question, in the prototype of the Question constructor
Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for( i = 0; i < this.answers.length; i++ ) {
        console.log(i + '. ' + this.answers[i]);
    }
}

// define a couple of questions, instances of above defined function constructor
var q1 = new Question(
    "Which one of these is not a javascript framework?",
    ["Node", "Django", "React", "Vue"],
    1
);

var q2 = new Question(
    "Who is learning this code and writing these helpful comments?",
    ["Sahil", "Harman", "Sharan"],
    0
);

var q3 = new Question(
    "JavaScript can be used to code full stack, as well as mobile applications.",
    ["yes", "no"],
    0
);

console.log("Game Started.");
// Store all these above question objects into an array
var questions = [q1, q2, q3];

// Create an infinite loop, to iterate
while(1) {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();

    var answer = prompt("Please enter your answer: ");

    if( parseInt(answer) === questions[n].correctAnswer) {
        console.log("Correct.");
    } else if( answer === "exit" ) {
        break;
    }
}
console.log("Game Finished.");