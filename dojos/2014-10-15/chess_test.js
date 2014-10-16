var Chess = require('./chess.js');
var Position = require('./chess.js');
var Piece = require('./chess.js');

var assert = require('chai').assert;

it('should play the game', function(){
  var chess = new Chess;
  // var position = new Position(x, y);

    assert.deepEqual(chess.board, [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r']
  ]);
console.log(Position(0,0))
console.log(Piece)
  // assert.equal(position(0,0), 'R')

});
