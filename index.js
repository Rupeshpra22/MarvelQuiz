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
    options: ['2005','2008','2010','2012'],
    answers: ['B','b']
  },
  {
    question: "What is the name of Thor’s hammer?",
    options: ['Vanir','Mjolnir','Aesir','Norn '],
    answers: ['B','b']
  },
  {
    question: "What is Captain America’s shield made of?",
    options: ['Adamantium','Vibranium','Promethium', 'Carbonadiumr'],
    answers: ['B','b']
  },
  {
    question: "What is the real name of the Black Panther?",
    options: ['A: T’Challa','B: M’Baku','C: N’Jadaka','D: N’Jobu'],
    answers: ['A','a']
  },
  {
    question: "What was the last movie in Phase 4 of MCU?",
    options: ['Spider-Man: Far From Home','Avengers: Endgame','Captain Marvel','Avengers: Infinity War'],
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
    let asciiCode = 65;
    for(let option of question.options){      
     console.log(String.fromCharCode(asciiCode)+" : "+option);
     asciiCode++
    }
    // question.options.forEach((index, option)=>{
    //  // console.log(index)
    //   console.log(`${String.fromCharCode(index+65)} : ${option}` );
    // })
    let answer = readLineSync.question();
    let validOption = isValidOption(answer);
    if(validOption !== undefined){
      console.log(validOption);
      answer=readLineSync.question("Your Option is: ");
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
