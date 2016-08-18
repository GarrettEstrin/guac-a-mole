// Customer Javascript by Garrett Estrin


// create container variable
var theContainer = document.getElementById('container');
// create box variables. id=boxNum
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');

// functions
function makeGreen() {
  this.style.backgroundColor = 'pink';
}

// clicklisteners for boxes
box1.addEventListener('click', makeGreen);
box2.addEventListener('click', makeGreen);
box3.addEventListener('click', makeGreen);
box4.addEventListener('click', makeGreen);
box5.addEventListener('click', makeGreen);
box6.addEventListener('click', makeGreen);
box7.addEventListener('click', makeGreen);
box8.addEventListener('click', makeGreen);
box9.addEventListener('click', makeGreen);
