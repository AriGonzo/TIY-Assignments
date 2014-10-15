

//0 //1 //2 //3 //4 //5 //6 //7

var board = [
['R','N','B','Q','K','B','N','R'],
['P','P','P','P','P','P','P','P'],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
['p','p','p','p','p','p','p','p'],
['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

//Catalan Opening: Closed Variation

var moves = {
  //White Queen's Pawn moves up 2 spots
  step1: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  },
  //Black Queen's pawn moves forward 2 spots
  step2: function(){
    board[3][3] = board[1][3];
    board[1][3] = ' ';
  },
  //
  //White Knight moves up 2 spots and over 1
  step3: function(){
    board[5][5] = board[7][6];
    board[7][6] = ' ';
  },

  //Black King Pawn moves up 1 spot
  step4: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  },
  //White Knight Pawn moves up 1 spot
  step5: function(){
    board[5][6] = board[6][6];
    board[6][6] = ' ';
  },
  //Black Bishop moves diagonal down and left 1 spot
  step6: function(){
    board[1][4] = board[0][5];
    board[0][5] = ' '
  },
  //White Bishop's Pawn moves up 2 spots
  step7: function(){
    board[4][2] = board[6][2];
    board[6][2] = ' ';
  },

  //Black Knights moves over 1 spot and down 2
  step8: function(){
    board[2][5] = board[0][6];
    board[0][6] = ' ';
  },

  //White Bishop moves diagonal up and right 1 spot
  step9: function(){
    board[6][6] = board[7][5];
    board[7][5] = ' ';
  }
}
console.log(board.join('\n'));

var assert = require('chai').assert
var expect = require('chai').expect



describe('Testing the board state', function(){
  it('After Move 1, the board should look like:', function(){
    moves.step1();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    );
  });
  it('after Move 2, the board should look like:', function(){
    moves.step2();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    );
  });
  it('after Move 3, the board should look like:', function(){
    moves.step3();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('after Move 4, the board should look like:', function(){
    moves.step4()

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('after Move 5, the board should look like:', function(){
    moves.step5();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p','p',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('after Move 6, the board should look like:', function(){
    moves.step6();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ','N','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p','p',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('after Move 7, the board should look like:', function(){
    moves.step7();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ','N','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('after Move 8, the board should look like:', function(){
    moves.step8();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('after Move 9, the board should look like:', function(){
    moves.step9();

    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ',' ','r'] ]
    );
  });
})
