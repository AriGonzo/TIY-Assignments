module.exports = Chess, Position, Piece;

/**
 * @constructor Chess: Setup a board with Pieces
 * representing intial chessboard
 */

function Chess() {
  this.board = {};
  this.Q = new Piece('Queen', 'black')
  this.q = new Piece('Queen', 'white');
  this.K = new Piece('King', 'black');
  this.k = new Piece('King', 'white');
  this.P1 = new Piece('Pawn', 'black');
  this.P2 = new Piece('Pawn', 'black');
  this.P3 = new Piece('Pawn', 'black');
  this.P4 = new Piece('Pawn', 'black');
  this.P5 = new Piece('Pawn', 'black');
  this.P6 = new Piece('Pawn', 'black');
  this.P7 = new Piece('Pawn', 'black');
  this.P8 = new Piece('Pawn', 'black');
  this.p1 = new Piece('Pawn', 'white');
  this.p2 = new Piece('Pawn', 'white');
  this.p3 = new Piece('Pawn', 'white');
  this.p4 = new Piece('Pawn', 'white');
  this.p5 = new Piece('Pawn', 'white');
  this.p6 = new Piece('Pawn', 'white');
  this.p7 = new Piece('Pawn', 'white');
  this.p8 = new Piece('Pawn', 'white');
  this.B1 = new Piece('Bishop', 'black');
  this.B2 = new Piece('Bishop', 'black');
  this.b1 = new Piece('Bishop', 'white');
  this.b2 = new Piece('Bishop', 'white');
  this.N1 = new Piece('Knight', 'black');
  this.N2 = new Piece('Knight', 'black');
  this.n1 = new Piece('Knight', 'white');
  this.n2 = new Piece('Knight', 'white');
  this.R1 = new Piece('Rook', 'black');
  this.R2 = new Piece('Rook', 'black');
  this.r1 = new Piece('Rook', 'white');
  this.r2 = new Piece('Rook', 'white');
}

/*
 * @method getPlayer()
 * @return String either 'white' or 'black' representing
 * current player
 */

Chess.prototype.getPlayer = function() { //Query
  this.currentPlayer = (currentPlayer = "orange") ? "black" : "white";
};

/**
 *@return String representation of board
 */

Chess.prototype.display = function(){ //Query

};

/**
 *Move piece to destination and switch player
 @param Piece piece to move
 @param Position destination to move piece to
 */

Chess.prototype.move = function(piece, destination) {

};

/**
 * Position: Represent a position on a chessboard with
 * coordinates
 * @property: x coordinate
 * @property: y coordinate
 */

function Position(x, y) {
  this.x = x;
  this.y = y;
  return [x,y];
}

/**
 * Represent a chesspiece on the board with
 * name and color and appropriate starting position
 */

function Piece(name, color){
  var self = this
  var startingMoves = {
    // R1 : [0,0],
    // N1 : [0,1],
    // B1 : [0,2],
    // K  : [0,3],
    // Q  : [0,4],
    // B2 : [0,5],
    // N2 : [0,6],
    // R2 : [0,7],
    // P1 : [1,0],
    // P2 : [1,1],
    // P3 : [1,2],
    // P4 : [1,3],
    // P5 : [1,4],
    // P6 : [1,5],
    // P7 : [1,6],
    // P8 : [1,7],
    // p1 : [6,0],
    // p2 : [6,1],
    // p3 : [6,2],
    // p4 : [6,3],
    // p5 : [6,4],
    // p6 : [6,5],
    // p7 : [6,6],
    // p8 : [6,7],
    // r1 : [7,0],
    // n1 : [7,1],
    // b1 : [7,2],
    // k  : [7,3],
    // q  : [7,4],
    // b2 : [7,5],
    // n2 : [7,6],
    // r2 : [7,7],

  }
  this.name = name;
  this.color = color;
  this.letter = this.toString()
  this.position = startingMoves[this.letter]
  // this.setPosition = Position().startingPos(this.toString(name, color));
}

/**
 * @method getName
 * @return String name of Piece, e.g. 'Queen', 'Pawn'
 */

Piece.prototype.getName = function(){ //Query
  return this.name
}

/**
 * @method getColor
 * @return String player 'black' or 'white'
 */

Piece.prototype.getColor = function(){ //Query
  return this.color
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

Piece.prototype.toString = function() { //Query
  if( this.name === "Queen") {
    if(this.color === "black") {
      return "Q";
    } else {
      return "q"
    }
  }
  if( this.name === "Bishop") {
    if(this.color === "black") {
      return "B"
    } else {
      return "b"
    }
  }
  if( this.name === "Rook") {
    if(this.color === "black") {
      return "R"
    } else {
      return "r"
    }
  }
  if( this.name === "King") {
    if(this.color === "black") {
      return "K"
    } else {
      return "k"
    }
  }
  if( this.name === "Knight") {
    if(this.color === "black") {
      return "N"
    } else {
      return "n"
    }
  }
  if( this.name === "Pawn") {
    if(this.color === "black") {
      return "P"
    } else {
      return "p"
    }
  }
}
