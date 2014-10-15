module.exports = Game;

function board(){
  return [
  [false, false, false],
  [false, false, false],
  [false, false, false],
  ];
}

function Game(){
  this.board = board();
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x, y} is alive
 */
 Game.prototype.isAlive = function(x, y){
   if(this.board[x][y] === true){
     return true;
   };
 }

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
 Game.prototype.setAlive = function(x, y){
   this.board[x][y] = true;
 }

/**
 * Make the cell at {x,y} "dead", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
 Game.prototype.setDead = function(x,y){
   this.board[x][y] = false;
 }

 /**
  * update the 'board' by applying the 'rules' to each cell.
  */
  Game.prototype.tick = function(){
    var newBoard = board();
    for (var i = 0; i < newBoard.length; i++){
      for(var j = 0; j < newBoard[i].length; j++){
        newBoard.push(this.rules(i, j, board));
      };
    };
    newBoard.splice(0, 3);

    board = newBoard;
    var a = board.splice(0, 3);
    var b = board.splice(0, 3);
    this.board = [a, b, board];
    return this.board;
  }
    //Start with a fresh board...
    //Apply 'rules' to each cell in the current board...
    //Record the results of 'rules' in the new board...
    //Update the current board to match the new board.

 Game.prototype.neighborsOf = function(x, y){
    var neighbors;
    var liveCell = 0;
    if (x === 0 && y === 0) {
      neighbors = [this.board[0][1], this.board[1][0], this.board[1][1]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 0 && y === 1) {
      neighbors = [this.board[0][0], this.board[1][0], this.board[1][1],
      this.board[1][2], this.board[0][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 0 && y === 2) {
      neighbors = [this.board[0][1], this.board[1][1], this.board[1][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 1 && y === 0) {
      neighbors = [this.board[0][0], this.board[0][1], this.board[1][1],
      this.board[2][1], this.board[2][0]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 1 && y === 1) {
      neighbors = [this.board[0][0], this.board[1][0], this.board[2][0],
      this.board[0][1], this.board[2][1], this.board[0][2], this.board[1][2],
      this.board[2][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 1 && y === 2) {
      neighbors = [this.board[0][1], this.board[0][2], this.board[1][1],
      this.board[2][1], this.board[2][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 2 && y === 0) {
      neighbors = [this.board[1][0], this.board[1][1], this.board[2][1]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 2 && y === 1) {
      neighbors = [this.board[2][0], this.board[1][0], this.board[1][1],
      this.board[1][2], this.board[2][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 2 & y === 2) {
      neighbors = [this.board[2][1], this.board[1][1], this.board[1][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    return liveCell;
 } //end neighborsOf

/**
 * What goes here?
 */
 Game.prototype.rules = function(x, y, board){
   board = this.board;
   var cell = this.board[x][y];
   liveCell = this.neighborsOf(x, y);
          if (cell) {    //rule #1
            if (liveCell < 2) {
              newCell = false;
          }
            if (liveCell === 2 || liveCell === 3) {
              newCell = true; //rule #2
          }
            if (liveCell > 3){ //rule #3
              newCell = false;
          }
        } else {
              if (liveCell === 3){
              newCell = true;
         } else {
              newCell = false;
          };
        };
        return newCell;
      }
    /**
     * WARNING: This is VOODOO MAGIC...
     *
     * GIVEN:
     *   this.board === [
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *   ];
     *
     * EXPECT:
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     */
Game.prototype.display = function(){
    var spacer = '+---+---+---+\n';

    return spacer +
        // Apply `renderRow` to each `row` in `board`...
        this.board.map(function renderRow(row){
            return '| ' +
                // Apply `renderCell` to each `cell` in `row`...
                row.map(function renderCell(cell){
                    // return 'X' if `cell` is TRUTHY otherwise return ' '
                    return cell && 'X' || ' ';
                }).join(' | ') // Place ' | ' between each `cell`...
            + ' |\n';
        }).join(spacer) // Place `spacer` between each `row`...
    + spacer;
} // END display

//ABANDON ALL HOPE! ALL YE WHO ENTER HERE//
//aka don't go past here, yo
// var assert = require('assert');
// assert(false)


/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean representation of a cell
 */
 // getCell: function(){

 // }
/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
 // isAlive: function(x, y){

 // }
/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return
 */
 // makeLive: function() {
 //
 // }
 //  board: undefined,
 //  newBoard: function(){
 //    return [
 //    [false, false, false],
 //    [false, false, false],
 //    [false, false, false]
 //    ]
 //  },
 //  rules: function(cell, neighbors){ /* i.e. conway(cell, neighbors) */ },
 //  neighborsOf: function(x,y){ /* . . . */ },
 //  tick: function(){
 //    if ( this.board[0][1] && this.board[1][1] && this.board[2][1] ){
 //      this.board[0][1] = this.board[2][1] = false;
 //      this.board[1][0] = this.board[1][2] = true;
 //    }
 //    else if (this.board[1][0] && this.board[1][1] && this.board[1][2] ){
 //      this.board[1][0] = this.board[1][2] = false;
 //      this.board[0][1] = this.board[2][1] = true;
 //    }
 //  },
