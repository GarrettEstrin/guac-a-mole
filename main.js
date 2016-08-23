// Customer Javascript by Garrett Estrin

// Score Counter
var score = 0;
var scoreBoard = document.getElementById('score-board');
// create container variable
var theContainer = document.getElementById('container');
// create box variables. id=boxNum
var holes = document.querySelectorAll('.hole');

// Mole
var mole = '<img width="60px" src="mole2.png" alt="mole" align="center" />';
// functions
function randomInt(n){
  return Math.floor(n * Math.random())
}

// clicklisteners for boxes
holes.forEach(function(el){
  el.addEventListener('click', function(){
    if(el.innerHTML === ""){
      console.log('miss');
    }
    else {
      console.log('hit');
      score = score + 100;
      console.log(score);
      el.innerHTML = "";
      scoreBoard.innerHTML = score;
      holes[randomInt(9)].innerHTML = mole;
    }
  })
});
