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

 }

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
 Game.prototype.setAlive = function(x, y){

 }

/**
 * Make the cell at {x,y} "dead", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
 Game.prototype.setDead = function(x,y){

 }

 /**
  * update the 'board' by applying the 'rules' to each cell.
  */
  Game.prototype.tick = function(){
    //Start with a fresh board...
    //Apply 'rules' to each cell in the current board...
    //Record the results of 'rules' in the new board...
    //Update the current board to match the new board.
  }

/**
 * What goes here?
 */
 Game.prototype.rules = function(){

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
