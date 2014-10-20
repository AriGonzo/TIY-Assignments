var Chess = require('./chess.js');
var Position = require('./chess.js');
var Piece = require('./chess.js');

var assert = require('chai').assert;
var expect = require('chai').expect;
var chess = new Chess;


it('should return "King"', function(){
  assert.equal(chess.pieces[0].getName(), "King");
 });
it('should return "Black"', function(){
  assert.equal(chess.pieces[0].getColor(), "black")
})
it('should return "R" for "Black Rook"', function(){
  assert.equal(chess.pieces[4].toString(), "R")
})
it('should return "n" for "White Knight"', function(){
  assert.equal(chess.pieces[9].letter, "n")
})
it('chess.k.getName should equal "King"', function(){
  expect(chess.pieces[0].getName()).to.equal("King");
})
it('should give me an "x = 0" and "y = 4" for Black Queen', function(){
  assert.deepEqual(chess.pieces[2].position, [0 , 3])
})
it('should display the Catalan Opening', function (){
  assert.equal(chess.display(),
          "+---+---+---+---+---+---+---+---+\n" +
          "| R | N | B | Q | K |   |   | R |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| P | P | P |   | B | P | P | P |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   |   | P | N |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   | P |   |   |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   | p | p |   |   |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   |   |   | n | p |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| p | p |   |   | p | p | b | p |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| r | n | b | q | k |   |   | r |\n" +
          "+---+---+---+---+---+---+---+---+\n"
        );
});
console.log(chess)

// console.log(chess.board)
chess.opening();
// console.log(chess.board)
// console.log(chess.Q)
// console.log(chess.K)

// console.log(chess.Q.Position)
