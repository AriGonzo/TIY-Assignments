/* === PRODUCTION CODE === */
function solution(){
    // change input to suit the solution, e.g. `limit`
    return {
        // I wanna see this one...
        solveFor: function(limit){ /* perform magic... */ },

        // For Problem 2, for example... However you solve it.
        fibonacci: function(limit){ /* . . . */ },
        filterEvens: function(list){ /* . . . */ },
        sum: function(list){ /* . . . */ }
    }
}

//Problem 6: Find the difference between the sum of the squares of the first
//one hundred natural numbers and the square of the sum.


function solution(){
  return {
    squareSum: function(){
      var sum100 = 0;
      for(i=1; i<=100; i++){
        sum100 += i;
      }
      sum100 = Math.pow(sum100,2);
      return sum100
    },//END sumSquares
    sumSquare: function(){
      var sq100 = 0;
      for(i=1; i<=100; i++){
        sq100 += Math.pow(i,2);
      }
      return sq100
    },//END sumSquare
    diff: function(){
      return this.squareSum() - this.sumSquare();
    }
  }//END return

}//END solution

console.log(solution().diff()) // returns 25164150 yay

/* === TEST CODE === */
// You should probably write some...
var assert = require('chai').assert

/*
* We started testing our functions with values we already knew, in this case,
* where the limit is 10 (the sumSquare and squareSum were provided by the Proj
* Euler site)
*/

// describe('squareSum', function(){
//   it('squares the sum of natural numbers 1-10', function(){
//     assert.equal(solution().squareSum(), 3025)
//   })
//   it('sums the squares of natural numbers 1-10', function(){
//     assert.equal(solution().sumSquare(), 385)
//   })
//   it('finds difference of sum100 and sq100', function(){
//     assert.equal(solution().diff(), 2640)
//   })
// })
