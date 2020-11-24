// hint: there's an error in these objects
// if you copy/paste blindly it won't work
var readline = require('readline-sync')
var chalk = require('chalk')
var score = 0;
var final_score = 0;

function play(question, answer) {

  var userAnswer = readline.question(question)
  if (userAnswer === answer) {
    console.log(chalk.greenBright("You are Right!"))
    score = score + 1;
    final_score = score;

  }
  else {
    console.log(chalk.redBright("You are Wrong!"))
    score = score - 1;
    final_score = score;
  }

  console.log("Your current Score : " + score)

  console.log("----------------------------");
  console.log("\n");
}



var highscore = [{
  name: "Aman",
  score: 1
},
{
  name  : "Aakash",
  score: 8
},
{
  name  : "Yogesh",
  score : 6
}
]

var questions = [{
      question: "Who is my favorite superhero?\n",
      answer: "Dhruv"
    },
    {
      question: "Which is my favorite sad song?\n",
      answer: "Channa Meraya"
    },

    {
      question: "Where are you working?\n",
      answer: "Codeholic"
    },
     {
      question: "Which is your best friend?\n",
      answer: "Nobody"
    },
    {
      question: "Watch Price \n",
      answer: "2000",
    }

  ]
var username = readline.question('What\'s your Name\n');
console.log("----------------------------\n");
var usercity = readline.question('Where are you from ?\n');
console.log("----------------------------\n");
console.log("It's feel Good That you are from " + usercity);
console.log("****************\n");
console.log("Welcome to the Quiz " + username)
console.log("----------------------------\n");
for (var i = 0; i < questions.length; i++) {
  console.log("Question : " + i)
  console.log('\n');
  var current = questions[i];
  play(current.question, current.answer);
}

console.log("YAY! your final Score is : ", final_score);
console.log('\n');
console.log(chalk.yellow.bold('High Scores : \n'));
for(var  j = 0 ; j<highscore.length; j++)
{
  var current_highscore =  highscore[j];
  console.log(current_highscore.name +" : "+current_highscore.score );
  
}