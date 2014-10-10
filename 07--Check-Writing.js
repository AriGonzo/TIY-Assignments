/**
 * Check Writing
 *
 * Given an Number representing money -- $1234.56 -- convert
 * that into it's string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * In a lot of ways, this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned there will be put into
 * practice here, but backwards. Hooray!
 */

/**
 * Sample Data:
 *
 * $ 1234.56 => "one thousand, two hundred thirty four and 56/100s"
 * $ 123.45  => "one hundred twenty three and 45/100s"
 * $ 12.34   => "twleve and 34/100s"
 * $ 1.23    => "one and 23/100s"
 *
 * EXTRA CREDIT!
 *
 * $ 12,345,678.90 =>
 * "twelve million, three hundred fourty five thousand, six hundred
 *   seventy eight and 90/100s"
 *
 * Make up your own, too.
 */

ones =     ["zero", "one", "two", "three", "four", "five", //this array holds all of the ones values to be concatenated later
            "six", "seven", "eight", "nine", "ten", "eleven",
            "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen"]

tens =     ["zero", "ten ", "twenty ", "thirty ", "fourty ", "fifty ", //this array holds all of the teen values to be concatenated later
            "sixty ", "seventy ", "eighty ", "ninety "]

teens =    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
            "seventeen", "eighteen", "nineteen"] //this array holds all of the tens values to be concatenated later

hundreds = ["zero", "one hundred ", "two hundred ", "three hundred ", "four hundred ",
            "five hundred ", "six hundred ", "seven hundred ", "eight hundred ",
            "nine hundred "] //this array holds all of the hundreds values to be concatenated later

thousands = ["zero", "one thousand ", "two thousand ", "three thousand ", "four thousand ",
             "five thousand ", "six thousand ", "seven thousand ", "eight thousand ",
             "nine thousand "] //this array holds all of the thousands values to be concatenated later

var checkWriting ={
    num2letter: function(num){
        var cents = ((num - Math.floor(num))* 100).toFixed(0) //calculates the change
        num = Math.floor(num) //rounds the number down to a whole number
        var val = num.toString(); //converts the number to an array of strings

        if (num < 20){ //values 0-20
        return ones[num] + " dollars and " + cents + "/100 cents";
      }
        if (num < 100) { //values 20 - 99
          if (num % 10 === 0) { //fixes the issue of numbers like 30 != thirty zero
          return tens[val[0]] + "dollars and " + cents + "/100 cents";
        } {
          return tens[val[0]] + ones[val[1]] + " dollars and " + cents + "/100 cents";
        }
      }
      if (num < 1000) { //values 100-999
        if (val[1] === '0' && val[2] === '0') { //fixes the issue to get numbers like 100 to work
        return hundreds[val[0]] + "dollars and " + cents + "/100 cents";
        }
        if (val[1] < 2) { //fixes issues like 'one hundred ten two' != one hundred twelve
        return hundreds[val[0]] + teens[val[2]] + " dollars and " + cents + "/100 cents";
        }
        if (num % 10 === 0) {
          return hundreds[val[0]] + tens[val[1]] + "dollars and " + cents + "/100 cents";
        } {
          return hundreds[val[0]] + tens[val[1]] + ones[val[2]] + " dollars and " + cents + "/100 cents";
        }
      }
      if (num < 10000) { //values 1000 - 9999
        if(num % 100 === 0) {
          return thousands[val[0]] + hundreds[val[1]] + "dollars and " + cents + "/100 cents";
        }
        if(val[1] === '0' && val[2] === '0' && val[3] === '0') {
          return thousands[val[0]] + " dollars and " + cents + "/100 cents";
        }
      if (val[2] < 2) {
        return thousands[val[0]] + hundreds[val[1]] + teens[val[3]] + " dollars and " + cents + "/100 cents";
      } {
        return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + ones[val[3]] + " dollars and " + cents + "/100 cents";
        }
      }
    }
  }

console.log(checkWriting.num2letter(423))


//
// function test(actual, expected, success){
//     success = success || 'YOU DID IT!';
//
//     assert(actual === expected) || console.log(success);
// }

// var testCases = [
//   [1234.56, "one thousand two hundred thirty four dollars and 56/100 cents"],
//   [1100, "one thousand one hundred dollars and 0/100 cents"],
//   [1119.20, "one thousand one hundred nineteen dollars and 20/100 cents"],
//   [12.50, "twelve dollars and 50/100 cents"],
//   [19, "nineteen dollars and 0/100 cents"],
//   [0, "zero dollars and 0/100 cents"],
//   [17, "seventeen dollars and 0/100 cents"],
//   [13, "thirteen dollars and 0/100 cents"],
//   [11, "eleven dollars and 0/100 cents"],
//   [7, "seven dollars and 0/100 cents"],
//   [65, "sixty five dollars and 0/100 cents"],
//   [99, "ninety nine dollars and 0/100 cents"],
//   [41, "fourty one dollars and 0/100 cents"],
//   [30.12, "thirty dollars and 12/100 cents"],
//   [112, "one hundred twelve dollars and 0/100 cents"],
//   [115, "one hundred fifteen dollars and 0/100 cents"],
//   [119, "one hundred nineteen dollars and 0/100 cents"],
//   [130, "one hundred thirty dollars and 0/100 cents"],
//   [321.92, "three hundred twenty one dollars and 92/100 cents"]
// ]
// var assert = require('assert');
//
// suite(num2letter(0), function(){
//   var pre = "should return check amount when given";
//   test('should return check amount when given "0"', function(){
//     assert.equal("zero dollars and 0/100 cents", num2letter(0))
//   });
//   test(pre + " 1234.56", function(){
//     assert.equal("one thousand two hundred thirty four dollars and 56/100 cents", num2letter(1234.56))
//   });
//   test(pre +  " 1100", function(){
//     assert.equal("one thousand one hundred dollars and 0/100 cents", num2letter(1100))
//   });
//   test(pre +  " 1119.20", function(){
//     assert.equal("one thousand one hundred nineteen dollars and 20/100 cents", num2letter(1119.20))
//   });
//   test(pre + " 321.92", function(){
//     assert.equal("three hundred twenty one dollars and 92/100 cents", num2letter(321.92))
//   });
//   test(pre + " 30.12", function(){
//     assert.equal("thirty dollars and 12/100 cents", num2letter(30.12))
//   });
//   test(pre + " 112", function(){
//     assert.equal("one hundred twelve dollars and 0/100 cents", num2letter(112))
//   });
//   test(pre + "99", function(){
//     assert.equal("ninety nine dollars and 0/100 cents", num2letter(99))
//   });
// })
//
// // testCases.forEach(function(testCase) {
// //   var actual = num2letter(testCase[0])
// //     expected = testCase[1]
// //     console.log("Number: " + testCase[0].toFixed(2) + " was converted to '" + testCase[1] + "'!")
// //
// //   assert.strictEqual(actual, expected);
// // });
// //
// // test(true, true, 'true is true!');
// // test(num2letter(19), "nineteen dollars and 0/100 cents", '19 >>> nineteen')
// //
// //   console.log(num2letter(1234.56))
// //   console.log(num2letter(1100))
// // console.log(num2letter(1119.20))
// // console.log(num2letter(12.50))
// // console.log(num2letter(19))
// // console.log(num2letter(0))
// // console.log(num2letter(17))
// // console.log(num2letter(13))
// // console.log(num2letter(11))
// // console.log(num2letter(7))
// // console.log(num2letter(65))
// // console.log(num2letter(99))
// // console.log(num2letter(41))
// // console.log(num2letter(30.12))
// // console.log(num2letter(112))
// // console.log(num2letter(115))
// // console.log(num2letter(119))
// // console.log(num2letter(130))
// // console.log(num2letter(340))
// // console.log(num2letter(729))
// // console.log(num2letter(283))
// // console.log(num2letter(492))
// // console.log(num2letter(321.92))
// // console.log(num2letter(100))
// // console.log(num2letter(200))
// // console.log(num2letter(300))
// // console.log(num2letter(400))
// // console.log(num2letter(500))
// // console.log(num2letter(1000))
// console.log(num2letter(2000))
// console.log(num2letter(3000))
// console.log(num2letter(4000))
// console.log(num2letter(5000))
