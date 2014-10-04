var assert = require('assert');

//PRODUCTION CODE***

board = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
]

function conwayGOL(board) {
  var x = 0;
  var y = 0;
  var cell = board[x][y];
  for (x = 0; x < board.length; x++){
    for(y = 0; y < board[x]; y++) {
      var neighbors = new Array();
      function neighborOf(board, x, y) {
        if (x === 0 && y === 0) {
          neighbors.push([board[0][1], board[1][0], board[1][1]]);
        }
        if (x === 0 && y === 1) {
          neighbors.push([board[0][0], board[1][0], board[1][1],
          board[1][2], board[0][2]]);
        }
        if (x === 0 && y === 2) {
          neighbors.push([board[0][1], board[1][1], board[1][2]]);
        }
        if (x === 1 && y === 0) {
          neighbors.push([board[0][0], board[0][1], board[1][1],
          board[2][1], board[2][0]]);
        }
        if (x === 1 && y === 1) {
          neighbors.push([board[0][0], board[1][0], board[2][0],
          board[0][1], board[2][1], board[0][2], board[1][2],
          board[2][2]]);
        }
        if (x === 1 && y === 2) {
          neighbors.push([board[0][1], board[0][2], board[1][1],
          board[2][1], board[2][2]]);
        }
        if (x === 2 && y === 0) {
          neighbors.push([board[1][0], board[1][1], board[2][1]]);
        }
        if (x === 2 && y === 1) {
          neighbors.push([board[2][0], board[1][0], board[1][1],
          board[1][2], board[2][2]]);
        }
        if (x === 2 && y === 2) {
          neighbors.push([board[2][1], board[1][1], board[1][2]]);
        }
        while(x < 3 && y < 3) {
          function conway(cell, neighbors) {
            var newBoard = new Array();
            var livingCell = 0;
            for (var i = 0; i < neighbors.length; i++){
              if (neighbors[i] === true)
                 livingCell++;
            }         //applying the rules by counting LivingCell Neighbors
              if (cell === true){    //rule #1
                if (livingCell < 2) {
                  newBoard.push(false);
              }
                if (livingCell === 2 || livingCell === 3) {
                  newBoard.push(true); //rule #2
              }
                if (livingCell > 3){ //rule #3
                  newBoard.push(false);
              }
            } else {
                  if (livingCell === 3){
                  newBoard.push(true);
             } else {
                  newBoard.push(false);
              }
              board = newBoard
              return board
             }
         }
        }
      }
    }
  }
}

console.log(conwayGOL(board))
//
// //NEIGHBOROF FUNCTION - GIVES YOU THE VALUE OF ALL NEIGHBORS SURROUNDING CELL
// function neighborOf(board, x, y) {
//   if (x === 0 && y === 0) {
//     neighbors = [board[0][1], board[1][0], board[1][1]];
//   }
//   if (x === 0 && y === 1) {
//     neighbors = [board[0][0], board[1][0], board[1][1],
//     board[1][2], board[0][2]];
//   }
//   if (x === 0 && y === 2) {
//     neighbors = [board[0][1], board[1][1], board[1][2]];
//   }
//   if (x === 1 && y === 0) {
//     neighbors = [board[0][0], board[0][1], board[1][1],
//     board[2][1], board[2][0]];
//   }
//   if (x === 1 && y === 1) {
//     neighbors = [board[0][0], board[1][0], board[2][0],
//     board[0][1], board[2][1], board[0][2], board[1][2],
//     board[2][2]]
//   }
//   if (x === 1 && y === 2) {
//     neighbors = [board[0][1], board[0][2], board[1][1],
//     board[2][1], board[2][2]]
//   }
//   if (x === 2 && y === 0) {
//     neighbors = [board[1][0], board[1][1], board[2][1]]
//   }
//   if (x === 2 && y === 1) {
//     neighbors = [board[2][0], board[1][0], board[1][1],
//     board[1][2], board[2][2]]
//   }
//   if (x === 2 && y === 2) {
//     neighbors = [board[2][1], board[1][1], board[1][2]]
//   }
//   return neighbors;
// }
//
// //START OF CONWAY FUNCTION - EVALUATES NEIGHBORS AND CHANGES LIFE OF CELL
// var newCell = []
// function conway(cell, neighbors) {
//   var livingCell = 0;
//   for (var i = 0; i < neighbors.length; i++){
//     if (neighbors[i] === true)
//        livingCell++;
//   }         //applying the rules by counting LivingCell Neighbors
//     if (cell === true){    //rule #1
//       if (livingCell < 2) {
//         newCell.push(false);
//     }
//       if (livingCell === 2 || livingCell === 3) {
//         newCell.push(true); //rule #2
//     }
//       if (livingCell > 3){ //rule #3
//         newCell.push(false);
//     }
//   } else {
//         if (livingCell === 3){
//         newCell.push(true);
//    } else {
//         newCell.push(false);
//     }
//    }
//    return [cell, [newCell]]
// }
//
// // TEST CODE***
// function test(actual, expected, success){
//     if (success === undefined) success = 'YOU MAGNIFICENT BASTARD, YOU DID IT!';
//     assert.strictEqual(actual, expected);
//     console.log(success);
// }

//
// //TEST VARIABLES
// var actual = neighborOf(board, 0, 0)
// var c2test = neighborOf(board, 1, 0)
// var c3test = neighborOf(board, 2, 0)
// var c4test = neighborOf(board, 0, 1)
// var c5test = neighborOf(board, 1, 1)
// var c6test = neighborOf(board, 2, 1)
// var c7test = neighborOf(board, 0, 2)
// var c8test = neighborOf(board, 1, 2)
// var c9test = neighborOf(board, 2, 2)
// var con1test = conway(board[0][0], actual)
// var con2test = conway(board[1][0], c2test)
// var con3test = conway(board[2][0], c3test)
// var con4test = conway(board[0][1], c4test)
// var con5test = conway(board[1][1], c5test)
// var con6test = conway(board[2][1], c6test)
// var con7test = conway(board[0][2], c7test)
// var con8test = conway(board[1][2], c8test)
// var con9test = conway(board[2][2], c9test)
//
// //TESTS
// // (test(tick(board, board)))
// test(con1test, false);
// // test(con2test, true);
// // test(con3test, false);
// // test(con4test, false);
// // test(con5test, true);
// // test(con6test, false);
// // test(con7test, false);
// // test(con8test, true);
// // test(con9test, false);
// // test(actual[0], board[0][1]); test()
// // // test(actual[1], board[1][0]);
// // // test(actual[2], board[1][1]);
// // test(actual.length, 3)
// // test(actual[3], undefined);
// // test(c2test[0], board[0][0]);
// // test(c2test[1], board[0][1]);
// // test(c2test[2], board[1][1]);
// // test(c2test[3], board[2][1]);
// // test(c2test[4], board[2][2]);
// // test(c2test[5], undefined);
// // test(c2test.length, 5);
// // test(c3test[0], board[1][0]);
// // test(c3test[1], board[1][1]);
// // test(c3test[2], board[2][1]);
// // test(c3test[3], undefined);
// // test(c3test.length, 3);
// // test(c4test[0], board[0][0]);
// // test(c4test[1], board[1][0]);
// // test(c4test[2], board[1][1]);
// // test(c4test[3], board[1][2]);
// // test(c4test[4], board[0][2]);
// // test(c4test.length, 5);
// // test(c4test[5], undefined);
// // test(c5test[0], board[0][0]);
// // test(c5test[1], board[1][0]);
// // test(c5test[2], board[2][0]);
// // test(c5test[3], board[0][1]);
// // test(c5test[4], board[2][1]);
// // test(c5test[5], board[0][2]);
// // test(c5test[6], board[1][2]);
// // test(c5test[7], board[2][2]);
