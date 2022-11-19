
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
console.log("Let's see how well do you know Badminton? ");

var score = 0;
//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("Yes You are right");
    score = score + 1

  } else {
    console.log(" You are wrong");

  }
  console.log("Current Score : " + score)
  console.log("__________________________\n")

}

var question = [{
  question: "1. The rules for modern badminton were developed in which country during the 19th century? \na.China \nb.Britain \nc.Germany \nd.India\nEnter your answer : ",
  answer: "b"
},
{
  question: "2.  In a badminton game, the winner is the first one to reach … points.? \na.11 \nb.16 \nc.21 \nd.19 \nEnter your answer : ",
  answer: "c"
},

{
  question: "3.  What is the name of the international governing body for badminton recognised by the International Olympic Committee?\na.Badminton World Federation – BWF \nb.International Badminton Association – IBA \nc.Badminton World Organization – BWO \nd.None Of the Above\nEnter your answer : ",
  answer: "a"
},

{
  question: "4.  When a badminton player wins a rally, how many points can he or she get? \na.1 point \nb.2 point \nc.3 point \nd.4 point\nEnter your answer : ",
  answer: "a"
},

{
  question: "5.  Which term is used when a player violates the rules?\na.An Error \nb.A Fault \nc.A Mistake \nd.None Of Above\nEnter your answer : ",
  answer: "b"
},

{
  question: "6.  What is the name of the international badminton tournaments for men’s team competition? \na.Thomas Cup \nb.Wimbledon \nc.Uber Cup \nd.Sudirman Cup\nEnter your answer : ",
  answer: "a"
},

{
  question: "7.  What can be the maximum number of games in a badminton match? \na.2 \nb.4 \nc.5 \nd.3\nEnter your answer : ",
  answer: "d"
},

{
  question: "8.  What is the other name of a shuttlecock in badminton \na.A ball \nb.A Birdie \nc.A run \nd.Cork\nEnter your answer : ",
  answer: "b"
},

{
  question: "9.  What is the oldest badminton tournament in the world?\na.Malaysia Open \nb.China Open \nc.All-England Open \nd.Germany Open\nEnter your answer : ",
  answer: "c"
},

{
  question: "10.  What is widely regarded as the most powerful shot or stroke in badminton? \na.A clear \nb.A drive \nc.A smash \nd.None Of Above\nEnter your answer : ",
  answer: "c"
}];

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i].question
  var currentAnswer = question[i].answer
  play(currentQuestion, currentAnswer)
}

console.log("You Scored : " + score);
