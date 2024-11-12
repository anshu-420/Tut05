
//number of circles we have in the game
var numCircles = 6;
//The colour variable should be an array that contains as many random RGB colours as there are circles. 
var colours = [];
//This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;
//This is the default colour of the game. 
let defaultColour="#582c99"

//Grab all appropriate elements from the HTML.
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector('h1');
var resetButton = document.getElementById("restart");

init();

//The init function should reset the stage and set a new RGB color
function init() {

	reset();//Call the reset function

	colourToGuess.textContent=pickedColor;//Set the text of the colourToGuess element to display the correct RGB color
	circles.forEach(function (circle) {
		circle.addEventListener('click' , clickCircle); 
	});

	resetButton.addEventListener('click' , reset);

}

e1.onclick = reset;
//Define what should happen when any circle is clicked. 

function clickCircle(e) {
	var target=e.target;
	if (target.style.backgroundColor == pickedColor){//When a circle is clicked, it should check if the color of a circle
		//is the same as the color to be guessed. If it is, you have won. You should set 
		resultMessage.textContent="You win!";// the display message to "You win", change the text of the reset button to "Play again"
		resetButton.textContent="Play Again";
		for(let i=0;i<circles.length;i++){// and set the color of each circle and of the banner to be the color we were guessing. 
			circles[i].style.backgroundColor=pickedColor;
		}
		banner.style.backgroundColor=pickedColor;
	}
	else{
		target.style.backgroundColor=defaultColour;// If the color you clicked on was incorrect, you should set the color of the circle you just clicked to be the default color
		resultMessage.textContent="Try again";// and change the result text to be "Try again"
	}
}

// Display the colour RGB value on the main page.
// Ensure that if a circle is clicked that the clickCircle function is called. 
function reset() {
	colours=genRandomColours();// The reset function should set new values for the colours array by calling genRandomColours.
	pickedColor=chooseColor();// pick a color from these and set it as the color you are trying to pick. This color should be obtained by calling chooseColor.
	colourToGuess.textContent=pickedColor;// Set the colour of the circles to the random colors you generated. 
	for (let i=0;i<circles.length;i++){
		circles[i].style.backgroundColor=colours[i];
	}
	
	banner.style.backgroundColor=defaultColour;// Set the color of the banner to the default color
	resetButton.textContent= "Restart";// Set button to "Restart"
	resultMessage.textContent='';//  Set the result text to an empty String

	// Ensure that if a circle is clicked that the clickCircle function is called.
	

}
//Write a function to make a random RGB color. For RGB colours are 
// made up of 3 values from 0 to 256. You should basically generate 3 random 
// numbers and create a string "rgb(0,0,0)" but replace the 0 with random values. 
//return that string
//works
function makeColour() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
  	var b = Math.floor(Math.random() * 256);
  	return `rgb(${r}, ${g}, ${b})`;
}


// Write a function that will set new values for the colours array.
// It should contain as many RGB color strings as there are circles
//works
function genRandomColours() {
	var colours=[];// 6 colours
	for (let i=0;i<numCircles;i++){
		colours.push(makeColour())//push random RGB colours to colurs array
	}
	return colours;
}

//return one of the 6 RGB colours you created and stored in colours
// this function should set the colour you are guessing.
//works
function chooseColor() {
	return colours[Math.floor(Math.random()*colours.length)];
}