var readlineSync = require('readline-sync')
var userName = readlineSync.question('What is your name ? ');
console.log('Welcome ' + userName + ' to DO YOU KNOW GOVARDHAN ?')

score = 0

var highestScores = [{
  'name': 'Buddu',
  'score': 4
},{
 'name': 'Vijay',
  'score': 2 
}]

var qsOne = {
  'qtn':'What is my nick name ? ',
  'ans':'buddu'
}
var qsTwo = {
  'qtn': 'Where do i live ? ',
  'ans':'pebbair'
}
var qsThree = {
  'qtn':'Who is my favourite cricketer ? ',
  'ans':'kohli'
}
var qsFour = {
  'qtn':'Where do i work ? ',
  'ans':'infosys'
}
var qsFive = {
  'qtn':'What is my favourite subject ? ',
  'ans':'maths'
}

var questions = [qsOne,qsTwo,qsThree,qsFour,qsFive]

for (i=0;i<questions.length;i++){
  var currentQtn = questions[i]
  play(currentQtn.qtn, currentQtn.ans)
  console.log("-------------------------------------")
}

function play(qtn, ans){
  var userAns = readlineSync.question(qtn);
  if (userAns.toLowerCase() == ans){
    console.log("You're right !!!")
    score = score+1
    console.log("Your current score is : "+ score)
  }else{
      console.log("You're wrong !!!")
  }
}
console.log("Your total score is : "+ score)

console.log("Checkout the highscores. If you should be there, send the screenshot of your score and I'll update")
for (j=0;j<highestScores.length;j++){
  currentItem = highestScores[j];
  console.log(currentItem.name +" : "+ currentItem.score)
}
console.log('Thank You !!')