module.exports = Chess, Position, Piece;

/**
 * @constructor Chess: Setup a board with Pieces
 * representing intial chesspieces
 */



function Chess() {
  var pieces = [];
  this.board = [];
  for (var i = 0; i < 8; i++){
    this.board.push(new Array(8));
  }

  var self = this;
  collection = [
  [self.K,  'King'  , 'black',0,3] , [self.k,  'King'  , 'white',7,4],
  [self.Q,  'Queen' , 'black',0,4] , [self.q,  'Queen' , 'white',7,3],
  [self.R1, 'Rook'  , 'black',0,0] , [self.r1, 'Rook'  , 'white',7,0],
  [self.R2, 'Rook'  , 'black',0,7] , [self.r2, 'Rook'  , 'white',7,7],
  [self.N1, 'Knight', 'black',0,1] , [self.n1, 'Knight', 'white',7,1],
  [self.N2, 'Knight', 'black',0,6] , [self.n2, 'Knight', 'white',7,6],
  [self.B1, 'Bishop', 'black',0,2] , [self.b1, 'Bishop', 'white',7,2],
  [self.B2, 'Bishop', 'black',0,5] , [self.b2, 'Bishop', 'white',7,5],
  [self.P1, 'Pawn'  , 'black',1,0] , [self.p1, 'Pawn'  , 'white',6,0],
  [self.P2, 'Pawn'  , 'black',1,1] , [self.p2, 'Pawn'  , 'white',6,1],
  [self.P3, 'Pawn'  , 'black',1,2] , [self.p3, 'Pawn'  , 'white',6,2],
  [self.P4, 'Pawn'  , 'black',1,3] , [self.p4, 'Pawn'  , 'white',6,3],
  [self.P5, 'Pawn'  , 'black',1,4] , [self.p5, 'Pawn'  , 'white',6,4],
  [self.P6, 'Pawn'  , 'black',1,5] , [self.p6, 'Pawn'  , 'white',6,5],
  [self.P7, 'Pawn'  , 'black',1,6] , [self.p7, 'Pawn'  , 'white',6,6],
  [self.P8, 'Pawn'  , 'black',1,7] , [self.p8, 'Pawn'  , 'white',6,7],
  ]

  collection.forEach(function(piece, index){
      pieces.push(piece[0] = new Piece(piece[1], piece[2]))
      piece[0].position = new Position(piece[3], piece[4]))
  })

  // pieces.push(this.Q = new Piece('Queen', 'black'));
  // this.Q.position = new Position(0,4);
  // pieces.push(this.q = new Piece('Queen', 'white'));
  // this.q.position = new Position(7,4);
  // pieces.push(this.K = new Piece('King', 'black'));
  // this.K.position = new Position(0,3);
  // pieces.push(this.k = new Piece('King', 'white'));
  // this.k.position = new Position(7,3);
  // pieces.push(this.P1 = new Piece('Pawn', 'black'));
  // this.P1.position = new Position(1,0);
  // pieces.push(this.P2 = new Piece('Pawn', 'black'));
  // this.P2.position = new Position(1,1)
  // pieces.push(this.P3 = new Piece('Pawn', 'black'));
  // this.P3.position = new Position(1,2)
  // pieces.push(this.P4 = new Piece('Pawn', 'black'));
  // this.P4.position = new Position(1,3);
  // pieces.push(this.P5 = new Piece('Pawn', 'black'));
  // this.P5.position = new Position(1,4);
  // pieces.push(this.P6 = new Piece('Pawn', 'black'));
  // this.P6.position = new Position(1,5);
  // pieces.push(this.P7 = new Piece('Pawn', 'black'));
  // this.P7.position = new Position(1,6);
  // pieces.push(this.P8 = new Piece('Pawn', 'black'));
  // this.P8.position = new Position(1,7);
  // pieces.push(this.p1 = new Piece('Pawn', 'white'));
  // this.p1.position = new Position(6,0);
  // pieces.push(this.p2 = new Piece('Pawn', 'white'));
  // this.p2.position = new Position(6,1);
  // pieces.push(this.p3 = new Piece('Pawn', 'white'));
  // this.p3.position = new Position(6,2);
  // pieces.push(this.p4 = new Piece('Pawn', 'white'));
  // this.p4.position = new Position(6,3);
  // pieces.push(this.p5 = new Piece('Pawn', 'white'));
  // this.p5.position = new Position(6,4);
  // pieces.push(this.p6 = new Piece('Pawn', 'white'));
  // this.p6.position = new Position(6,5);
  // pieces.push(this.p7 = new Piece('Pawn', 'white'));
  // this.p7.position = new Position(6,6);
  // pieces.push(this.p8 = new Piece('Pawn', 'white'));
  // this.p8.position = new Position(6,7);
  // pieces.push(this.B1 = new Piece('Bishop', 'black'));
  // this.B1.position = new Position(0,2);
  // pieces.push(this.B2 = new Piece('Bishop', 'black'));
  // this.B2.position = new Position(0,5);
  // pieces.push(this.b1 = new Piece('Bishop', 'white'));
  // this.b1.position = new Position(7,2);
  // pieces.push(this.b2 = new Piece('Bishop', 'white'));
  // this.b2.position = new Position(7,5);
  // pieces.push(this.N1 = new Piece('Knight', 'black'));
  // this.N1.position = new Position(0,1);
  // pieces.push(this.N2 = new Piece('Knight', 'black'));
  // this.N2.position = new Position(0,6);
  // pieces.push(this.n1 = new Piece('Knight', 'white'));
  // this.n1.position = new Position(7,1);
  // pieces.push(this.n2 = new Piece('Knight', 'white'));
  // this.n2.position = new Position(7,6);
  // pieces.push(this.R1 = new Piece('Rook', 'black'));
  // this.R1.position = new Position(0,0);
  // pieces.push(this.R2 = new Piece('Rook', 'black'));
  // this.R2.position = new Position(0,7);
  // pieces.push(this.r1 = new Piece('Rook', 'white'));
  // this.r1.position = new Position(7,0);
  // pieces.push(this.r2 = new Piece('Rook', 'white'));
  // this.r2.position = new Position(7,7);

  console.log(pieces)

}

/*
 * @method getPlayer()
 * @return String either 'white' or 'black' representing
 * current player˜
 */

// function Board() {
//   Piece.position : Piece.letter
// }

Chess.prototype.getPlayer = function(pieces){
   if(pieces === pieces.toLowerCase()){
      return 'white';
   }
      return 'black';
}

/**
 *@return String representation of board
 */

Chess.prototype.display = function(){
  var self = this;
  var pieces = [this.Q, this.q, this.K, this.k, this.P1, this.P2, this.P3,
                this.P4, this.P5, this.P6, this.P7, this.P8, this.p1, this.p2,
                this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.qB,
                this.kB, this.qb, this.kb, this.qN, this.kN, this.qn, this.kn,
                this.qR,this.kR, this.qr, this.kr];
  var board = Array.matrix(8,8,0);
  var spacer = '+---+---+---+---+---+---+---+---+\n';
    return spacer +
        board.map(function renderRow(row){
          return '| ' +
              row.map(function renderPosition(){
                  pieces.forEach(function(value, index){
                    var x = pieces[index].position[0];
                    var y = pieces[index].position[1];
                    board[x][y] = Piece().letter;
                    return pieces[index].toString() || ' ';
                  });
              }).join(' | ')
          + ' |\n';
        }).join(spacer)
    + spacer;
}

Array.matrix = function(numrows, numcols, initial){
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
}

/**
 *Move piece to destination and switch player
 @param Piece piece to move
 @param Position destination to move piece to
 */

Chess.prototype.move = function(piece, destination) {
pieces.forEach(function(value, index){
    if (pieces[index].position[0] === piece[0] && pieces[index].position[1] === piece[1]){
      var x = pieces[index].position[0];
      var y = pieces[index].position[1];
      self.board[x][y] = ' ';
      pieces[index].position = destination
      x = pieces[index].position[0];
      y = pieces[index].position[1];
      self.board[x][y] = pieces[index].letter
    }
  })
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
  this.name = name;
  this.color = color;
  this.letter = this.toString()
  // this.position = new Position()
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
  var x,y;
  this.position = position;
  position = new Position(x,y)
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
