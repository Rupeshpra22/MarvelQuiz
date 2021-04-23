let correctAnswer = 0;
let validOptions=["a","b","c","d","A","B","C","D"];
console.log("Hi!, How are you? Are you a Marvel fan?");
console.log("You can proove yourself! Lets play MARVEL QUIZ!");
const readLineSync = require('readline-sync');
const name = readLineSync.question('Lets start! May i know your name?\n');
console.log('\n');
console.log(`Yo ${name}!, Lets gooooo\n`);

const quizQuestions = [
  {
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    options: ['A: 2005','B: 2008','C: 2010','D: 2012'],
    answers: ['B','b']
  },
  {
    question: "What is the name of Thor’s hammer?",
    options: ['A: Vanir','B: Mjolnir','C: Aesir','D: Norn '],
    answers: ['B','b']
  },
  {
    question: "What is Captain America’s shield made of?",
    options: ['A: Adamantium','B: Vibranium','C: Promethium', 'D: Carbonadiumr'],
    answers: ['B','b']
  },
  {
    question: "What is the real name of the Black Panther?",
    options: ['A: T’Challa','B: M’Baku','C: N’Jadaka','D: N’Jobu'],
    answers: ['A','a']
  },
  {
    question: "About which city do Hawkeye and Black Widow often reminisce",
    options: ['A: Budapest','B: Sokovia','C: Istanbul','D: Prague'],
    answers: ['A','a']
  }
]

const isValidOption = (option) =>{
  if(!validOptions.includes(option)){
  return "Please enter valid option";
  }
} 

const quizApp = () =>{
  quizQuestions.forEach((question,index)=>{
    console.log(index+1 +" : " +question.question);
    for(let option of question.options){
     console.log(option);
    }
    let answer = readLineSync.question();
    let validOption = isValidOption(answer);
    if(validOption !== undefined){
      console.log(validOption);
      answer=readLineSync.question("Your Option is: \n");
    }    
    if(question.answers.includes(answer)){
      console.log("Corrrecccct!\n");
      correctAnswer+=1;
    }else{
      console.log("Oops! Wrong");
      console.log(`Correct Answer is : ${question.answers[0]}\n`);
    }
  })
}

quizApp();
console.log(`Your Final Score: ${correctAnswer}`);

correctAnswer>3 && correctAnswer<=5 ? console.log("You are truely a Marvel fan") : correctAnswer>1 && correctAnswer<=3 ? console.log("Nice Try! You can do better") : console.log("You may need to watch some marvel movies again!")
