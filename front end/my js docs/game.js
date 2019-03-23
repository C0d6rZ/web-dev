var numSquares = 6;
var colors =generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn= document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor ;
	messageDisplay.textContent=null;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
	 	
	 } 
	 h1.style.background = "steelblue";
	 resetButton.textContent = "New Colors";
}


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3 ;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor ;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
	 	    squares[i].style.background = colors[i];
	    }else{
	    	squares[i].style.display = "none";
	    }
	 } 
});

hard.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor ;
	for (var i = 0; i < squares.length; i++) {
	 	    squares[i].style.background = colors[i];
	    	squares[i].style.display = "block";
	 } 
});

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323" ;
			messageDisplay.textContent = "try again!" ;
		}
	});
}

function changeColor (color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color ;
	}
}

function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr ;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}