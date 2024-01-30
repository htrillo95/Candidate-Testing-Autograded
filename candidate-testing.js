const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ("");

// TODO 2: modify your quiz app to ask 5 questions //

//TODO: Variables for Part 2
let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];

// TODO 1.1b: Ask for candidate's name //
function askForName() {  
  let candidateName = input.question("Enter your name: ");
}

// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
  let candidateAnswer = input.question(question);
  console.log(candidateAnswer);
}

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
function gradeQuiz(candidateAnswers) {
  if (candidateAnswer === correctAnswer) {
  console.log("Correct!");
} else {
  console.log ("Incorrect Answer");
}

//TODO 3.2 use this variable to calculate the candidates score.
  let grade;  
  let numCorrect = 0;

for (let i = 0; i < candidateAnswers.length; i++) { //checks each answer against correct ans
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    numCorrect++;
  }
}
grade = (numCorrect / questions.length) * 100;
  console.log(`Candidate Name: ${candidateName}`);

for (let i = 0; i < questions.length; i++) {
  console.log(`${i + 1}) ${questions[i]}`); //prints question 1 & iterates
  console.log(`   Your Answer: ${candidateAnswers[i]}`); //prints candidate answer from Candidate Array
  console.log(`   Correct Answer: ${correctAnswers[i]}`); //prints correct answer from CorrectAns Array
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Greetings" + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};