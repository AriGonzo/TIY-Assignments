var Chess = require('./chess.js');
var Position = require('./chess.js');
var Piece = require('./chess.js');

var assert = require('chai').assert;
var expect = require('chai').expect;
var chess = new Chess;


it('should return "Queen"', function(){
  assert.equal(chess.Q.getName(), "Queen");
});
it('should return "black"', function(){
  assert.equal(chess.Q.getColor(), "black")
})
it('should return "R" for "Black Rook"', function(){
  assert.equal(chess.R1.toString(), "R")
})
it('should return "n" for "White Knight"', function(){
  assert.equal(chess.n1.toString(), "n")
})
it('chess.k.getName should equal "King"', function(){
  expect(chess.k.getName()).to.equal("King");
})
it('should give me an "x = 0" and "y = 4" for Black Queen', function(){
  assert.deepEqual(chess.Q.position, [0 , 4])
})
// console.log(chess.board)

// console.log(chess.Q)

//
// console.log(chess.board);
// chess.move([0,0],[2,0])
// console.log(chess.board);
// chess.move([6,0],[4,0])
// console.log(chess.board);
// chess.Q.setPosition("King", (3,3))
// console.log(chess.board)

// console.log(chess.Q)
// console.log(chess.K)

// console.log(chess.Q.Position)
