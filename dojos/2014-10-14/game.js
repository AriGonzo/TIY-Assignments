module.exports = Game;

function Board(){
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean
 */

Board.prototype.isAlive = function(x,y){
  //return true if this.board[x][y] is "alive"
  return this.board[x + ',' + y];
};

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */

Board.prototype.live = function(x,y,value){
  //make the cell at {x,y} "alive", whatever that means
  this.board[x + ',' + y] = true
};

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */

Board.prototype.kill = function(x, y){
  //make the cell at {x,y} "dead", whatever that means
  delete this.board[x ',' + y]
};

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
   return this.board[x][y];
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
 Game.prototype.setDead = function(x, y){
   this.board[x][y] = false;
 }

 /**
  * update the 'board' by applying the 'rules' to each cell.
  */
  Game.prototype.tick = function(){
    //Start with a fresh board...
    var newBoard = board();
    var self = this;
    this.board.forEach(function(row, x){
      row.forEach(function(cell, y){
        var newCell = self.rules(x, y, this.board);
        newBoard[x][y] = newCell;
      });
    });
    this.board = newBoard;
  }
 /**
  * @param Number x coordinate
  * @param Number y coordinate
  * @return number of surrounding living cells
  */
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
    if (x === 2 && y === 2) {
      neighbors = [this.board[2][1], this.board[1][1], this.board[1][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    return liveCell;
 } //end neighborsOf

/** TRY THIS LATER
  var neighbors = [ ], diffs = [-1, 0, 1];

  diffs.forEach(function(dX){
    diffs.forEach(function(dY){
      if(dX == 0 && dY == 0) return;

      if(this.board[x + dX] && this.board[x + dx][y + dY]) {
        neighbors.push(true);
      }
    });
  });
  return neighbors;
  */

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean state of cell after rules applied
 */
 Game.prototype.rules = function(x, y){
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
