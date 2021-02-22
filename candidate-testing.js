const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
let namePrompt="What is your name?";

// TODO 1.1a: Define candidateName // 
let candidateName=" ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question='Who was the first American woman in space? ';
let correctAnswer='Sally Ride.';
let candidateAnswer='';
let questions=['Who was the first American woman in space?',  'True or false: 5000 meters = 5 kilometers.',  '(5 + 3)/2 * 10 = ?', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', 'What is the minimum crew size for the ISS?' ];
let correctAnswers= ['Sally Ride.', 'True', '40', 'Trajectory', '3'];
let candidateAnswers=[];


function askForName(quesName){
  let ans=input.question(quesName);
  return ans;
}
    
    
  // TODO 1.1b: Ask for candidate's name //

function askQuestion(questions){
    let ansArr=[];
    for(var ques in questions){
      ansArr[ques]=(input.question(questions[ques]));
    }
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
return ansArr;

}

function gradeQuiz(candidateAnswers, correctAnswers){
    

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade=0;
  let numRight=0;
  var pass=false;
  console.log("Candidate Name: "+candidateName);
  for(var ans in questions){
    console.log((parseInt(ans)+1)+") "+questions[ans]);
    console.log("Your answer: "+candidateAnswers[ans]);
    console.log("Correct answer: "+correctAnswers[ans]);
    if(candidateAnswers[ans].toLowerCase()==correctAnswers[ans].toLowerCase()){
      numRight++;
    }
    console.log("\n");
  }
  grade=(numRight/questions.length*100)
  if(grade>=60){
    pass=true;
  }
console.log(">>> Overall Grade: "+grade+"% ("+numRight+" of "+questions.length+" responses correct) <<<");
  if(pass){
  console.log(">>> Status: PASS <<<");
  }
  else{
    console.log(">>> Status: FAILED <<<");
  }
  return grade;
}

function runProgram() {
  candidateName=askForName(namePrompt);
  console.log(candidateName);  
  // TODO 1.1c: Ask for candidate's name //
  
  candidateAnswers=askQuestion(questions);
  grade=gradeQuiz(candidateAnswers,correctAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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