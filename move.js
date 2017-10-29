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
			board.board[i][tile.j].value = tile.value;
			tile.value = "-";
			console.log(board.board[i][tile.j]);
			return;
		}
	}
}
//############################# END DOWN MOVE #####################################


//############################# UP MOVE ###########################################

function makeUpMove() {	
	for (var i = 0; i < board.size; i++) {
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
			board.board[i][tile.j].value = tile.value;
			tile.value = "-";
			return;
		}
	}
}

//############################# END UP MOVE ########################################
