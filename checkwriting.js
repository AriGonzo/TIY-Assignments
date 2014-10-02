/*var assert = require('asstert');

function test(actual,expected, success) {
  assert(actual === expected) || console.log(success);
}*/


/**
 * Check Writing
 *
 * Given an integer representing money -- $1234.56 -- convert
 * that into it's string representatation in English words. For
 * example, "1234.56" us "one thousand two hundred thirty four
 * and 56/100", just like you would see on a check.
 *
 * In a lot of ways, this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned will be put into
 * practice here, but backwards. Hooray!
 */

 /**
  * Sample Data:
  *
  * 1234.56 => "one thousand two hundred thirty four and 56/100"
  * 123.45 => "one hundred twenty three and 45/100s"
  * 12.34 =>
  * 1.23 =>
  *
  * Make up you own, too.
  */

function breakItDown(num) {
  digits = num.toString().split();
  return digits
}

// function converter(digits){
//   var ones = 0;
//   var tens = 0;
//   var hundreds = 0;
//   var thousands = 0;
//
//   if (digits.length === 1) {
//     if (digits[0] === 1) {
//       ones = "one";
//     }
//     // while (number[0] === 2) {
//     //   ones = "two";
//     // }
//     // number = ones;
//     return ones;
//     }
//   }

// function converter(digits){
//   var index;
//   for (index = 0; index < digits.length; ++index) {
//       if (digits.length === 4) {
//         when (index )
//       }
//   }
// }

function cvtr(x) {
  for (index = 0; x.length = 0; index) {
    while (x.length = 4) {
      if (index[0] === 1) {
        ones = "one";
      };
    };
}

console.log(cvtr[1, 5, 3])
console.log(breakItDown(5454978))
console.log(digits.length)
console.log(digits[6])
// console.log(converter[438])
// console.log(converter(22))

//console.log(converter([33]))

/*function num2word(num){
  if (num === 1) {
      num = "one "
  }
  if (num === 2) {
    num = "two "
  }
  if (num === 3) {
    num = "three"
  }
    return num
  }

function test_num2word(a, b) {
  console.log("It should turn the number " + a + " in the word " + b);
  num2word(a) === b;
}

test_num2word(1, "one");
test_num2word(2, "two");
console.log(num2word(1))
console.log(num2word(2)) */
