var assert = require('chai').assert
var expect = require('chai').expect

// // /* === PRODUCTION CODE === */
// function solution(){
//     // change input to suit the solution, e.g. `limit`
//     return {
//         // I wanna see this one...
//         solveFor: function(limit){ /* perform magic... */ },
//
//         // For Problem 2, for example... However you solve it.
//         fibonacci: function(limit){ /* . . . */ },
//         filterEvens: function(list){ /* . . . */ },
//         sum: function(list){ /* . . . */ }
//     }
// }
//
// /* === TEST CODE === */
// // You should probably write some...

// Find the largest palindrome made from the product of two 3-digit numbers.

function solution(){
  return {
    mult: function() {
      var results = [];
      for(var x = 999; x > 100; x--) {
        for(var y = 999; y > 100; y--) {
          var prod = x * y;
          if(prod.toString() == prod.toString().split("").reverse().join("")){
            results.push(x * y);
          }
        }
      }
      return Math.max.apply(Math, results)
    }
  }
}

describe('mult()', function(){
  it('should be at least over 10000', function(){
    expect(solution().mult()).to.be.above(10000);
  })
  it('should be under 998001', function(){
    expect(solution().mult()).to.be.below(998001)
  })
  it('should give a 3 digit number', function(){
    assert.equal(solution().mult(), 906609);
  })
  it('should return a number', function(){
    expect(solution().mult()).to.be.a('number');
  })
})

console.log(solution().mult()); // returns 906609
