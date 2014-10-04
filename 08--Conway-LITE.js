var assert = require('assert');

//PRODUCTION CODE***
board = [
  [true, true,  false],
  [true, false, false],
  [true, false, false],
]

function neighborOf(board, x, y) {
  var neighbors;
  if (x === 0 && y === 0) {
    neighbors = [board[0][1], board[1][0], board[1][1]];
  }
  if (x === 1 && y === 0) {
    neighbors = [board[0][0], board[0][1], board[1][1],
    board[2][1], board[2][2]];
  }
  if (x === 2 && y === 0) {
    neighbors = [board[1][0], board[1][1], board[2][1]];
  }
  if (x === 0 && y === 1) {
    neighbors = [board[0][0], board[1][0], board[1][1],
    board[1][2], board[0][2]];
  }
  if (x === 1 && y === 1) {
    neighbors = [board[0][0], board[1][0], board[2][0],
    board[0][1], board[2][1], board[0][2], board[1][2],
    board[2][2]]
  }
  if (x === 2 && y === 1) {
    neighbors = [board[1][0], board[2][0], board[1][1],
    board[1][2], board[2][2]]
  }
  if (x === 0 && y === 2) {
    neighbors = [board[0][1], board[1][1], board[1][2]]
  }
  if (x === 1 && y === 2) {
    neighbors = [board[0][2], board[0][1], board[1][1],
    board[2][1], board[2][2]]
  }
  if (x === 2 & y === 2) {
    neighbors = [board[1][2], board[1][1], board[2][1]]
  }
  return neighbors;
}



// TEST CODE***
function test(actual, expected, success){
    if (success === undefined) success = 'YOU MAGNIFICENT BASTARD, YOU DID IT!';
    assert.strictEqual(actual, expected);
    console.log(success);
}

var actual = neighborOf(board, 0, 0)
var c2test = neighborOf(board, 1, 0)
var c3test = neighborOf(board, 2, 0)
var c4test = neighborOf(board, 1, 0)
var c5test = neighborOf(board, 1, 1)
var c6test = neighborOf(board, 1, 2)
var c7test = neighborOf(board, 2, 0)
var c8test = neighborOf(board, 2, 1)
var c9test = neighborOf(board, 2, 2)
var i = 0

test(actual[0], board[0][1]);
test(actual[1], board[1][0]);
test(actual[2], board[1][1]);
test(actual.length, 3)
test(actual[3], undefined);
test(c2test[0], board[0][0]);
test(c2test[1], board[0][1]);
test(c2test[2], board[1][1]);
test(c2test[3], board[2][1]);
test(c2test[4], board[2][2]);
test(c2test[5], undefined);
test(c2test.length, 5);
test(c3test[0], board[1][0]);
test(c3test[1], board[1][1]);
test(c3test[2], board[2][1]);
test(c3test[3], undefined);
test(c3test.length, 3);
test(c4test[0], board[0][0]);
test(c4test[1], board[1][0]);
test(c4test[2], board[1][1]);
test(c4test[3], board[1][2]);
test(c4test[4], board[0][2]);
test(c4test.length, 5);
test(c4test[5], undefined);
