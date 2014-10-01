var assert = require('assert');

/**
 * The conway function determines if a cell
 * in Conway's Game of Life is alive or dead
 * for a single tick, given the neighbors ofS
 * that cell.
 */

function conway(cell, neighbors) {

}

//conway(cell, neighbors);

var cell = false,
    neighbors = [
      false, false, false, false,
      false, false, false, false
    ];
assert(
    (conway(cell,neighbors), false,
  ) || console.log('PASS!');
