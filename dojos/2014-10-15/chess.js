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
}

/*
 * @method getPlayer()
 * @return String either 'white' or 'black' representing current player
 */

Chess.prototype.getPlayer = function() {
};

/**
 *@return String representation of board
 */

Chess.prototype.display = function(){

};

/**
 *
 */

Chess.prototype.move = function(piece, destination) {

};

/**
 *
 */

function Position(x, y) {
  board = Chess.board;
  return board[x][y];
}

/**
 *
 */

function Piece(name, color){
}

/**
 *
 */

Piece.prototype.getName = function(){
}

/**
 *
 */

Piece.prototype.getColor = function(){
}

/**
 *
 */

Piece.prototype.setPosition = function(position){
}

/**
 *
 */

Piece.prototype.toString = function() {
}
