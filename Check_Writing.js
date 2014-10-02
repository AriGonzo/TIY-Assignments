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

ones =     ["zero", "one", "two", "three", "four", "five",
            "six", "seven", "eight", "nine", "ten", "eleven",
            "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen"]

tens =     ["zero", "ten ", "twenty ", "thirty ", "fourty ", "fifty ",
            "sixty ", "seventy ", "eighty ", "ninety "]

teens =    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
            "seventeen", "eighteen", "nineteen"]

hundreds = ["zero", "one hundred ", "two hundred ", "three hundred ", "four hundred ",
            "five hundred ", "six hundred ", "seven hundred ", "eight hundred ",
            "nine hundred "]

thousands = ["zero", "one thousand ", "two thousand ", "three thousand ", "four thousand ",
             "five thousand ", "six thousand ", "seven thousand ", "eight thousand ",
             "nine thousand "]

  function num2letter(num) {
    var cents = ((num - Math.floor(num))* 100).toFixed(0) //calculates the change
    num = Math.floor(num) //rounds the number down to a whole number
    var val = num.toString(); //converts the number to an array of strings

    if (num < 20){
    return ones[num] + " dollars and " + cents + "/100 cents";
  }
    if (num < 100) {
      if (num % 10 === 0) { //fixes the issue of numbers like 30 != thirty zero
      return tens[val[0]] + "dollars and " + cents + "/100 cents";
    } {
      return tens[val[0]] + ones[val[1]] + " dollars and " + cents + "/100 cents";
    }
  }
  if (num < 1000) {
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
  if (num < 10000) {
    if(val[1] === '0' && val[2] === '0' && val[3] === '0') {
      return thousands[val[0]] + "dollars and " + cents + "/100 cents";
    }
  if (val[2] < 2) {
    return thousands[val[0]] + hundreds[val[1]] + teens[val[3]] + " dollars and " + cents + "/100 cents";
  } {
    return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + ones[val[3]] + " dollars and " + cents + "/100 cents";
    }
  }
}
console.log(num2letter(1234.56))
console.log(num2letter(1100))
console.log(num2letter(1119.20))
console.log(num2letter(12.50))
console.log(num2letter(19))
console.log(num2letter(0))
console.log(num2letter(17))
console.log(num2letter(13))
console.log(num2letter(11))
console.log(num2letter(7))
console.log(num2letter(65))
console.log(num2letter(99))
console.log(num2letter(41))
console.log(num2letter(30.12))
console.log(num2letter(112))
console.log(num2letter(115))
console.log(num2letter(119))
console.log(num2letter(130))
console.log(num2letter(340))
console.log(num2letter(729))
console.log(num2letter(283))
console.log(num2letter(492))
console.log(num2letter(321.92))
console.log(num2letter(100))
console.log(num2letter(200))
console.log(num2letter(300))
console.log(num2letter(400))
console.log(num2letter(500))
console.log(num2letter(1000))
console.log(num2letter(2000))
console.log(num2letter(3000))
console.log(num2letter(4000))
console.log(num2letter(5000))
