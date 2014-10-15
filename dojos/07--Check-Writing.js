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

tens =     ["zero", "ten", "twenty", "thirty", "fourty", "fifty", //this array holds all of the teen values to be concatenated later
            "sixty", "seventy", "eighty", "ninety"]

teens =    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
            "seventeen", "eighteen", "nineteen"] //this array holds all of the tens values to be concatenated later

hundreds = ["zero", "one hundred", "two hundred", "three hundred", "four hundred",
            "five hundred", "six hundred", "seven hundred", "eight hundred",
            "nine hundred "] //this array holds all of the hundreds values to be concatenated later

thousands = ["zero", "one thousand", "two thousand", "three thousand", "four thousand",
             "five thousand", "six thousand", "seven thousand", "eight thousand",
             "nine thousand"] //this array holds all of the thousands values to be concatenated later


var checkWriting ={
    toEnglish: function(num){
        value = Number(num).toFixed(2);
        var checkEnd = ' and ' + value.slice(-2) + '/100 dollars';
        num = Math.floor(num) //rounds the number down to a whole number
        var val = num.toString(); //converts the number to an array of strings

        if (num < 20){ //values 0-20
        return ones[num] + checkEnd;
      }
        if (num < 100) { //values 20 - 99
          if (num % 10 === 0) { //fixes the issue of numbers like 30 != thirty zero
          return tens[val[0]] + checkEnd;
        } {
          return tens[val[0]] + " " + ones[val[1]] + checkEnd;
        }

      }
      if (num < 1000) { //values 100-999
        if (val[1] === '0' && val[2] === '0') { //fixes the issue to get numbers like 100 to work
        return hundreds[val[0]] + checkEnd;
        }
        if (val[1] < 2) { //fixes issues like 'one hundred ten two' != one hundred twelve
        return hundreds[val[0]] + " " +  teens[val[2]] + checkEnd;
        }
        if (num % 10 === 0) {
          return hundreds[val[0]] + " " +  tens[val[1]] + checkEnd;
        } {
          return hundreds[val[0]] + " " +  tens[val[1]] + " " +  ones[val[2]] + checkEnd;
        }
      }
      if (num < 10000) { //values 1000 - 9999
        if(num % 100 === 0) {
          return thousands[val[0]] + " " +  hundreds[val[1]] + checkEnd;
        }
        if(val % 1000 === 0) {
          return thousands[val[0]] + checkEnd;
        }
      if (val[2] < 2) {
        return thousands[val[0]] + " " +  hundreds[val[1]] + " " +  teens[val[3]] + checkEnd;
      } {
        return thousands[val[0]] + " " +  hundreds[val[1]] + " " +  tens[val[2]] + " " +  ones[val[3]] + checkEnd;
        }
      }
    }
  }

var assert = require('chai').assert;

suite("checkWriting.toEnglish() will return a written version of the numerals given ", function(){
  var pre = "should return check amount when given";
  test('should return check amount when given "0"', function(){
    assert.equal("zero and 00/100 dollars", checkWriting.toEnglish(0))
  });
  test(pre + " 1234.56", function(){
    assert.equal("one thousand two hundred thirty four and 56/100 dollars", checkWriting.toEnglish(1234.56))
  });
  test(pre +  " 1100", function(){
    assert.equal("one thousand one hundred and 00/100 dollars", checkWriting.toEnglish(1100))
  });
  test(pre +  " 1119.20", function(){
    assert.equal("one thousand one hundred nineteen and 20/100 dollars", checkWriting.toEnglish(1119.20))
  });
  test(pre + " 321.92", function(){
    assert.equal("three hundred twenty one and 92/100 dollars", checkWriting.toEnglish(321.92))
  });
  test(pre + " 30.12", function(){
    assert.equal("thirty and 12/100 dollars", checkWriting.toEnglish(30.12))
  });
  test(pre + " 112", function(){
    assert.equal("one hundred twelve and 00/100 dollars", checkWriting.toEnglish(112))
  });
  test(pre + " 99", function(){
    assert.equal("ninety nine and 00/100 dollars", checkWriting.toEnglish(99))
  });
})
