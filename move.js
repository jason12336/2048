//move.js for sketch.js
//This file contains all methods associated with moving tiles to declutter the sketch file


//############################# DOWN MOVE #########################################

function makeDownMove() {
	for (var i = 2; i >= 0; i--) {
		for (var j = 0; j < board.size; j++) {
			if (board.board[i][j].value != "-") {
				goDown(board.board[i][j]);	
			}
		}
	}
}

function goDown(tile) {
	for (var i = 3; i > tile.i; i--) {
		if (board.board[i][tile.j].value == "-") {
			swapEmpty(board.board[i][tile.j], tile);
			return;
		}
		else if (board.board[i][tile.j].value == tile.value) {
			swapTiles(board.board[i][tile.j], tile);
			return;
		}
	}
}
//############################# END DOWN MOVE #####################################


//############################# UP MOVE ###########################################

function makeUpMove() {	
	for (var i = 1; i < board.size; i++) {
		for (var j = 0; j < board.size; j++) {
			if (board.board[i][j].value != "-") {
				goUp(board.board[i][j]);
			}
		}
	}
}

function goUp(tile) {
	for (var i = 0; i < tile.i; i++) {
		if (board.board[i][tile.j].value == "-") {
			swapEmpty(board.board[i][tile.j], tile);
			return;
		}
		else if (board.board[i][tile.j].value == tile.value) {
			swapTiles(board.board[i][tile.j], tile);
			return;
		}
	}
}

//############################# END UP MOVE ########################################

//############################# START LEFT MOVE ####################################

function makeLeftMove() {
	for (var j = 1; j < board.size; j++) {
		for (var i = 0; i < board.size; i++) {
			if (board.board[i][j].value != "-") {
				goLeft(board.board[i][j]);
			}
		}
	} 
}

function goLeft(tile) {
	for (var j = 0; j < tile.j; j++) {
		if (board.board[tile.i][j].value == "-") {
			console.log(board.board[tile.i][j], tile);
			swapEmpty(board.board[tile.i][j], tile);
			return;
		}
		else if (board.board[tile.i][j].value == tile.value) {
			swapTiles(board.board[tile.i][j], tile);
			return;
		}
	}
} 

//############################# END LEFT MOVE #####################################

//############################# START RIGHT MOVE ##################################


function makeRightMove() {
	for (var j = 2; j >= 0; j--) {
		for (var i = 3; i >= 0; i--) {
			if (board.board[i][j].value != "-") {
				goRight(board.board[i][j]);
			}
		}
	}
}

function goRight(tile) {
	for (var j = 3; j > tile.j; j--) {
		if (board.board[tile.i][j].value == "-") {
			swapEmpty(board.board[tile.i][j], tile);
			return;
		}
		else if (board.board[tile.i][j].value == tile.value) {
			swapTiles(board.board[tile.i][j], tile);
			return;
		}
	}
}

function swapEmpty(emptyTile, tile) {
	emptyTile.value = tile.value;
	tile.value = "-";
	return;
}

function swapTiles(newTile, oldTile) {
	newTile.value = oldTile.value * 2;
	oldTile.value = "-";
	return;
}
