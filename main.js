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

game.utils = {};
// Timer

// Mole
game.mole = '<img width="60px" src="mole2.png" alt="mole" align="center" />';
// functions

// Place mole in random hole at start
game.utils.firstHole = function(){
  game.holes[game.utils.randomInt(9)].innerHTML = game.mole;
}
// Random number function
game.utils.randomInt = function(n){
  return Math.floor(n * Math.random())
}


// Functions called on page load
game.utils.firstHole();

// clicklisteners for boxes
game.holes.forEach(function(el){
  el.addEventListener('click', function(){
    if(el.innerHTML === ""){
      console.log('miss');
      game.score = game.score - 100;
      game.scoreBoard.innerHTML = game.score;
    }
    else {
      console.log('hit');
      game.score = game.score + 100;
      console.log(game.score);
      el.innerHTML = "";
      game.scoreBoard.innerHTML = game.score;
      game.holes[game.utils.randomInt(9)].innerHTML = game.mole;
    }
  })
});
