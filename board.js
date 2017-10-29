//board.js for 2048 game
//This provides the Board object and methods associated with Board

function Board() {
	this.board = [];
	this.size = 4;
	this.getBoard = function() {
		if (this.board.length == 0) {
			for (var i = 0; i < this.size; i++) {
				this.board.push([]);
				for (var j = 0; j < this.size; j++) {
					this.board[i].push(new Tile(i, j, "-"));
				}
			}
		}
		return this.board;
	}
	//this simply displays the places the tiles can sit not the tiles itself.
	//this method will call displayTiles() method if the indexed board is a tile else 
	//its a place
	this.displayBoard = function() { 
		if (this.board.length == 0) {
			this.getBoard();
		}
		for (var i = 0; i < this.board[0].length; i++) {
			for (var j = 0; j < this.board[0].length; j ++) {
				this.board[i][j].displayTile();
			}
		}
	}
	//gets all of the places on the board with not tile and returns a 2d array of indexes
	this.getAllPlaces = function() {
		places = [];
		for (var i = 0; i < this.board[0].length; i++) {
			for (var j = 0; j < this.board[0].length; j++) {
				if (this.board[i][j].value == "-") {
					places.push(this.board[i][j]);
				}
			}
		}		
		return places;
	}		
}
