//tile.js for 2048 game 
//This provides the Tile object and methods associated with Tile

function Tile (i, j, value) {
	this.i = i;
	this.j = j;
	this.value = value;
	//displays the Tile and it's value
	this.displayTile = function() {
		//display all of the places on the board
		if (this.value == "-") {
			fill(200);
			rect(205 * this.j, 205 * this.i, 200, 200);
		}
		//if there are any tiles on the board display them 
		else {
			fill(0);
			rect(205 * this.j, 205 * this.i, 200, 200);
			//display the value of the tile
			textSize(40);
			fill(255);
			text(this.value, (205 * j) + 90, (205 * i) + 110);
		}
	}
}
