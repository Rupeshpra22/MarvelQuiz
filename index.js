let correctAnswer = 0;
console.log("Hi!, How are you? Are you a Marvel fan?");
console.log("You can proove yourself! Lets play MARVEL QUIZ!");
const readLineSync = require('readline-sync');
const name = readLineSync.question('Lets start! May i know your name?\n');
console.log('\n');
console.log(`Hello ${name}, Here is your first question with options`);

const firstQuestion = readLineSync.question(`1: What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n A: 2005\n B: 2008\n C: 2010\n D: 2012\n\n`);

if(firstQuestion === "C" || firstQuestion === "c" || firstQuestion === "2008"){
  console.log("Corrrecccct!\n");
  correctAnswer+=1;
}else{
  console.log("Oops! Wrong\n");
}

const secondQuestion = readLineSync.question(`2: What is the name of Thor’s hammer?\n A: Vanir\n B: Mjolnir\n C: Aesir\n D: Norn\n\n`);

if(secondQuestion === "B" || secondQuestion === "b" || secondQuestion === "Mjolnir"){
  console.log("Corrrecccct!\n");
  correctAnswer+=1;
}else{
  console.log("Oops! Wrong\n");
}

const thirdQuestion = readLineSync.question(`3: What is Captain America’s shield made of?\n A: Adamantium\n B: Vibranium\n C: Promethium\n D: Carbonadium\n\n`);

if(thirdQuestion === "B" || thirdQuestion === "b" || thirdQuestion === "Vibranium"){
  console.log("Corrrecccct!\n");
  correctAnswer+=1;
}else{
  console.log("Oops! Wrong\n");
}

const fourthQuestion = readLineSync.question(`4: What is the real name of the Black Panther?\n A: T’Challa\n B: M’Baku\n C: N’Jadaka\n D: N’Jobu\n\n`);

if(fourthQuestion === "A" || fourthQuestion === "a" || fourthQuestion === "T’Challa"){
  console.log("Corrrecccct!\n");
  correctAnswer+=1;
}else{
  console.log("Oops! Wrong\n");
}

const fifthQuestion = readLineSync.question(`5: About which city do Hawkeye and Black Widow often reminisce?\n A: Budapest\n B: Prague\n C: Istanbul\n D: Sokovia\n\n`);

if(fifthQuestion === "A" || fifthQuestion === "a" || fifthQuestion === "2005"){
  console.log("Corrrecccct!\n");
  correctAnswer+=1;
}else{
  console.log("Oops! Wrong\n");
}

console.log(`Your Final Score: ${correctAnswer}`);

correctAnswer>3 && correctAnswer<=5 ? console.log("You are truely a Marvel fan") : correctAnswer>1 && correctAnswer<=3 ? console.log("Nice Try! You can do better") : console.log("You may need to watch some marvel movies again!")
