var assert = require('assert');

/**
 * The conway function determines if a cell
 * in Conway's Game of Life is alive or dead
 * for a single tick, given the neighbors ofS
 * that cell.
 */

function conway(cell, neighbors) {
  if (numberOfLiveNeighbors(neighbors) >= 2
){
  return true;
  }
  return false;
}

//conway(cell, neighbors);

var cell = false,
    neighbors = [
      false, false, false, false,
      false, false, false, false
    ];

assert.equal(conway(cell,neighbors), false,
  'an empty board should remain empty'
) || console.log('pass!')

assert.equal(conway(true, neighbors), false,
    'a cell with no neighbors dies'
) || console.log('pass!');

neighbors = [
  false, true,  false,
  false,        false,
  false, false, false
]

assert.equal(conway(true, neighbors), false,
'a cell with only 1 neighbor dies'
) || console.log('pass!');

function numberOfLiveNeighbors(neighbors){
  var liveCells = 0;
  var index = 0;

  while ( index < 8 ){
    if (neighbors[index] === true) {
    liveCells++;
    }
    index++;
  }

  return liveCells;
}


/*function test_numberOfLiveNeighbors(
  neighbors, expected, message
){
    var actual = numberOfLiveNeighbors(neighbors);

    assert(actual === expected) || console.log(message);
  }
*/
neighbors = [
  false, false, false,
  false,        false,
  false, false, false
]

assert(numberOfLiveNeighbors([
    false, false, false,
    true,        false,
    false, false, false
    ]) === 0 );
assert( numberOfLiveNeighbors)

/*test_numberOfLiveNeighbors([
  false, false, false,
  false,        false,
  false, false, false
  ], 1, '1 live neighbor (not [0]');
*/
