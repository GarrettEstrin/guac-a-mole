// Customer Javascript by Garrett Estrin


// Game object
var game = {};


// Score Counter
game.score = 0;
game.scoreBoard = document.getElementById('score-board');
// create container variable
game.theContainer = document.getElementById('container');
// create box variables. id=boxNum
game.holes = document.querySelectorAll('.hole');
// Define start game button
game.startButton = document.getElementById('start-game-button');
game.resetButton = document.getElementById("reset-game-button");


game.utils = {};
// Timer
game.time = 0;
// Mole
game.mole = '<img width="60px" src="mole2.png" alt="mole" align="center" />';
// functions
// function blink() {
//    var f = document.getElementById('Foo');
//    setInterval(function() {
//       f.style.display = (f.style.display == 'none' ? '' : 'none');
//    }, 1000);
// }

// Place mole in random hole at start
game.utils.firstHole = function(){
  game.holes[game.utils.randomInt(9)].innerHTML = game.mole;
}
// Random number function
game.utils.randomInt = function(n){
  return Math.floor(n * Math.random())
}

game.utils.clickFunction = function(){
  if(el.innerHTML === ""){
    game.score = game.score - 100;
    game.scoreBoard.innerHTML = game.score;
  }
  else {
    game.score = game.score + 100;
    el.innerHTML = "";
    game.scoreBoard.innerHTML = game.score;
    game.holes[game.utils.randomInt(9)].innerHTML = game.mole;
  }
}

// clicklisteners for boxes
game.init = function(){

setInterval(function(){game.time = game.time + 1}, 1000)

game.utils.firstHole();

// game.holes.forEach(function(el){
//   el.addEventListener('click', game.utils.clickFunction)};

game.holes.forEach(function(el){
  el.addEventListener('click', function(){
    if(game.time>9){
      // Do nothing
    }
    else if (el.innerHTML === ""){
      game.scoreBoard.innerHTML = game.score;
    }
    else {
      game.score = game.score + 100;
      el.innerHTML = "";
      game.scoreBoard.innerHTML = game.score;
      game.holes[game.utils.randomInt(9)].innerHTML = game.mole;
    }
  })
})
};

// Listeners
setInterval(function(){
  if(game.time<10){
  // do nothing
}
else {
  game.holes.forEach(function(el){
    el.innerHTML = ""});
  game.scoreBoard.innerHTML = "Final Score: " + game.score + " !"}}, 1000
);
// Functions called from elements
game.startButton.addEventListener('click', game.init);
// game.resetButton.addEventListener('click', window.location.reload;
// Functions called on page load
// game.init();
