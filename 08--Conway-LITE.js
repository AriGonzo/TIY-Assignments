var assert = require('assert');

//PRODUCTION CODE***

board = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
]
//NEIGHBOROF FUNCTION - GIVES YOU THE VALUE OF ALL NEIGHBORS SURROUNDING CELL
var neighbors;
function neighborOf(board, x, y) {
  if (x === 0 && y === 0) {
    neighbors = [board[0][1], board[1][0], board[1][1]];
  }
  if (x === 0 && y === 1) {
    neighbors = [board[0][0], board[1][0], board[1][1],
    board[1][2], board[0][2]];
  }
  if (x === 0 && y === 2) {
    neighbors = [board[0][1], board[1][1], board[1][2]];
  }
  if (x === 1 && y === 0) {
    neighbors = [board[0][0], board[0][1], board[1][1],
    board[2][1], board[2][0]];
  }
  if (x === 1 && y === 1) {
    neighbors = [board[0][0], board[1][0], board[2][0],
    board[0][1], board[2][1], board[0][2], board[1][2],
    board[2][2]]
  }
  if (x === 1 && y === 2) {
    neighbors = [board[0][1], board[0][2], board[1][1],
    board[2][1], board[2][2]]
  }
  if (x === 2 && y === 0) {
    neighbors = [board[1][0], board[1][1], board[2][1]]
  }
  if (x === 2 && y === 1) {
    neighbors = [board[2][0], board[1][0], board[1][1],
    board[1][2], board[2][2]]
  }
  if (x === 2 & y === 2) {
    neighbors = [board[2][1], board[1][1], board[1][2]]
  }
  return neighbors;
}

//START OF CONWAY FUNCTION - EVALUATES NEIGHBORS AND CHANGES LIFE OF CELL
var newCell;
function conway(cell, neighbors) {
  var livingCell = 0;
  for (var i = 0; i < neighbors.length; i++){
    if (neighbors[i] === true)
       livingCell++;
  }         //applying the rules by counting LivingCell Neighbors
    if (cell === true){    //rule #1
      if (livingCell < 2) {
        newCell = false;
    }
      if (livingCell === 2 || livingCell === 3) {
        newCell = true; //rule #2
    }
      if (livingCell > 3){ //rule #3
        newCell = false;
    }
  } else {
        if (livingCell === 3){  //rule #4
        newCell = true;
   } else {
        newCell = false;
    }
   }
   return newCell
}

//TICK CODE***

function tick(board){
  var newBoard = [] //create an empty array for the new board
  for (var i = 0; i < board.length; i++) { //walks along the rows of board
    for (var j = 0; j < board[i].length; j++) { //walks along columns of board
      newBoard.push(conway(board[i][j], neighborOf(board, i, j)));
    }                     //running conway and neighborOf functions and pushing
  }                       //them into an array.
  var row1 = newBoard.splice(0, 3);//splicing the array into 3 parts
  var row2 = newBoard.splice(0, 3);
  board = [row1, row2, newBoard]; //returning the full assembled board
  return board;
}


// TEST CODE***
function test(actual, expected, success){
    if (success === undefined) success = 'YOU MAGNIFICENT BASTARD, YOU DID IT!';
    assert.strictEqual(actual, expected);
    console.log(success);
}

function tick_test(board) {
  var after = tick(board)
  console.log("-----------------------");
  console.log(board);
  console.log("-----------------------");
  console.log(after);
  console.log("-----------------------");
}

//TEST VARIABLES
var actual = neighborOf(board, 0, 0)
var c2test = neighborOf(board, 1, 0)
var c3test = neighborOf(board, 2, 0)
var c4test = neighborOf(board, 0, 1)
var c5test = neighborOf(board, 1, 1)
var c6test = neighborOf(board, 2, 1)
var c7test = neighborOf(board, 0, 2)
var c8test = neighborOf(board, 1, 2)
var c9test = neighborOf(board, 2, 2)
var con1test = conway(board[0][0], actual)
var con2test = conway(board[1][0], c2test)
var con3test = conway(board[2][0], c3test)
var con4test = conway(board[0][1], c4test)
var con5test = conway(board[1][1], c5test)
var con6test = conway(board[2][1], c6test)
var con7test = conway(board[0][2], c7test)
var con8test = conway(board[1][2], c8test)
var con9test = conway(board[2][2], c9test)
var board2   = [
                [false, false, false],
                [false, true , false],
                [false, false, false],
                ]
var board3   = [
                [false, false, false],
                [false, true,  true ],
                [false, false, false],
                ]
var board4   = [
                [true,  false, false],
                [false, true,  false],
                [false, false, false],
                ]
var board5   = [
                [false, true, false],
                [false, true, false],
                [false, true, false],
                ]
var board6   = [
                [false, true, false],
                [true,  true, false],
                [false, true, false],
                ]



//TESTS
tick_test(board);
tick_test(board2);
tick_test(board3);
tick_test(board4);
tick_test(board5);
// tick_test(board6);
// console.log(board);
// console.log(tick(board));
// console.log(board2);
// console.log("------------")
// console.log(tick(board2));
// test(con1test, false);
// test(con2test, true);
// test(con3test, false);
// test(con4test, false);
// test(con5test, true);
// test(con6test, false);
// test(con7test, false);
// test(con8test, true);
// test(con9test, false);
// test(actual[0], board[0][1]);
// test(actual[1], board[1][0]);
// test(actual[2], board[1][1]);
// test(actual.length, 3)
// test(actual[3], undefined);
// test(c2test[0], board[0][0]);
// test(c2test[1], board[0][1]);
// test(c2test[2], board[1][1]);
// test(c2test[3], board[2][1]);
// test(c2test[4], board[2][2]);
// test(c2test[5], undefined);
// test(c2test.length, 5);
// test(c3test[0], board[1][0]);
// test(c3test[1], board[1][1]);
// test(c3test[2], board[2][1]);
// test(c3test[3], undefined);
// test(c3test.length, 3);
// test(c4test[0], board[0][0]);
// test(c4test[1], board[1][0]);
// test(c4test[2], board[1][1]);
// test(c4test[3], board[1][2]);
// test(c4test[4], board[0][2]);
// test(c4test.length, 5);
// test(c4test[5], undefined);
// test(c5test[0], board[0][0]);
// test(c5test[1], board[1][0]);
// test(c5test[2], board[2][0]);
// test(c5test[3], board[0][1]);
// test(c5test[4], board[2][1]);
// test(c5test[5], board[0][2]);
// test(c5test[6], board[1][2]);
// test(c5test[7], board[2][2]);
