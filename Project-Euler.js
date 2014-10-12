// /* === PRODUCTION CODE === */
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
//
// /* === TEST CODE === */
// // You should probably write some...

function solution(){
  return{
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

console.log(solution().mult());
