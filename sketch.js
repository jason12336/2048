//sketch.js for the game 2048
var board = new Board();

function setup() {
	createCanvas(900, 900);
	board.displayBoard();
	generateNewTile();
	console.log("something");
}

//generates new Tile called appropriately to regulate when a new Tile is made
function generateNewTile() {
	var places = board.getAllPlaces();
	if (places.length == 0) {
		console.log("Game over");
		return;
	}
	var chanceFour = random(0, 1);
	var randomPlace = places[round(random(0, places.length - 1))];
	randomPlace.value = (chanceFour < 0.9) ? 2 : 4;
}

//goes through the board and displays the created Tiles
function displayAllTiles() {
	for (var i = 0; i < board.size; i++) {
		for (var j = 0; j < board.size; j++) {
			if (board.board[i][j] != "-") {
				board.board[i][j].displayTile();
			}
		}	
	}
}

//listener for key events handled by p5js 
function keyPressed() {
	if (keyCode == DOWN_ARROW) {
		makeDownMove();
		generateNewTile(); //fix this so that it doesn't occur if nothing moves
	}
	if (keyCode == UP_ARROW) {
		makeUpMove();
		generateNewTile(); //same with this I am just not bothered right now
	}
	if (keyCode == LEFT_ARROW) {
		makeLeftMove();
		generateNewTile();
	}
	if (keyCode == RIGHT_ARROW) {
		makeRightMove();
		generateNewTile();
	}
}



function draw () {
	//for when the tiles move the places that were occupied but are not
	//anymore get drawn back onto the screen
	board.displayBoard(); 
	displayAllTiles(); //with each draw run draw the tiles on the board
}
