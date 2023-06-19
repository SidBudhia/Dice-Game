// Generated random number[0-1) and multiply by 6 and add 1 to get in b/w 1-6
// By document.querySelector getting img by class tag and setting its attribute src to that random number image

var randomNUmber1=Math.random();
randomNUmber1=Math.floor(randomNUmber1*6+1);
var randomDiceImage1="images/dice"+randomNUmber1+".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var randomNUmber2=Math.random();
randomNUmber2=Math.floor(randomNUmber2*6+1);
var randomDiceImage2="images/dice"+randomNUmber2+".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);


// Checking condition which player wins and manipulating h1 tag's (textContent) to required text

if(randomNUmber1>randomNUmber2) document.querySelector("h1").textContent="Player 1 Wins";
else if(randomNUmber1<randomNUmber2) document.querySelector("h1").textContent="Player 2 Wins";
else document.querySelector("h1").textContent="Its Draw";