module.exports = Chess, Position, Piece;

//0 //1 //2 //3 //4 //5 //6 //7

function board(){
  return [
['R','N','B','Q','K','B','N','R'],
['P','P','P','P','P','P','P','P'],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
['p','p','p','p','p','p','p','p'],
['r','n','b','q','k','b','n','r']
  ];
}

/**
 * @constructor Chess: Setup a board with Pieces representing intial chessboard
 */

function Chess() {
  this.board = board();
    var currentPlayer;
    // var currentPiece = Position(x,y);
}

/*
 * @method getPlayer()
 * @return String either 'white' or 'black' representing current player
 */

Chess.prototype.getPlayer = function() {
    if(this.currentPlayer === "white") {
        this.currentPlayer = "black";
    } else {
      if(this.currentPlayer === "black") {
        this.currentPlayer = "white";
      };
    };
};

/**
 *@return String representation of board
 */

Chess.prototype.display = function(){

};

/**
 *Move piece to destination and switch player
 @param Piece piece to move
 @param Position destination to move piece to
 */

Chess.prototype.move = function(piece, destination) {
  this.getPlayer()
};

/**
 * Position: Represent a position on a chessboard with coordinates
 * @property: x coordinate
 * @property: y coordinate
 */

function Position(x, y) {
  board = Chess.board;
  return this.board[x][y];
}

/**
 * Represent a chesspiece on the board with
 * name and color and appropriate starting position
 */

function Piece(name, color){
}

/**
 * @method getName
 * @return String name of Piece, e.g. 'Queen', 'Pawn'
 */

Piece.prototype.getName = function(){
}

/**
 * @method getColor
 * @return String player 'black' or 'white'
 */

Piece.prototype.getColor = function(){
}

/**
 * @method setPosition: Set Piece to position on board
 * @param Position position
 */

Piece.prototype.setPosition = function(position){
}

/**
 * @method toString()
 * @return String representation of Piece
 */

Piece.prototype.toString = function() {
}
