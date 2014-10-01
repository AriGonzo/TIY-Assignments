var assert = require('assert');

/**
 * The conway function determines if a cell
 * in Conway's Game of Life is alive or dead
 * for a single tick, given the neighbors ofS
 * that cell.
 */

function conway(cell, neighbors) {
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

neighbors = [
  false, false, false,
  false,        false,
  false, false, false
]
