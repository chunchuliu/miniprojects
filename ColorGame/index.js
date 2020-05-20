var squares = document.querySelectorAll(".square");
var colorList = [];
var pickedColor;
var numOfSquares = 6;
var modeKind;
var playAgain = document.getElementById("reset");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var mode = document.querySelectorAll(".mode");


generateSquares(numOfSquares);
checkMode();




function checkMode() {
	for(var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click", function() {
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			generateSquares(numOfSquares);
		});
	}

}

function generateSquares(numOfSquares) {
	for(var i = 0; i < numOfSquares; i++) {
		squares[i].style.display = "block";
		var randomColor = random();
		squares[i].style.backgroundColor = randomColor;
		colorList[i] = randomColor;
	}
	for(var i = numOfSquares; i < 6; i++) {
		squares[i].style.display = "none";
	}
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = randomPick(numOfSquares);
	playGame();
	playAgain.addEventListener("click", function() {
	generateSquares(numOfSquares);
})
}


function playGame() {
	for(var i = 0; i < numOfSquares; i++) {
		squares[i].addEventListener("click", function() {
			pickedColor = this.style.backgroundColor;
			if(pickedColor == colorDisplay.textContent){
				message.textContent = "Correct!!!"
				h1.style.backgroundColor = pickedColor;
				changeAllColor(pickedColor);
			} else {
				message.textContent = "Try again :(";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function changeAllColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function random() {
	var red  = Math.floor(Math.random() * 256);
	var green  = Math.floor(Math.random() * 256);
	var blue  = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function randomPick(numOfSquares) {
	var randomIndex = Math.floor(Math.random() * numOfSquares);

	return colorList[randomIndex];
}

