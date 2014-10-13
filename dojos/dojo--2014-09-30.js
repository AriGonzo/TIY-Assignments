/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */

var num = {
    "zero" :  0,
    "one" :   1,
    "two":    2,
    "three" : 3,
    "four" :  4,
    "five" :  5,
    "six" :   6,
    "seven" : 7,
    "eight" : 8,
    "nine" :  9,
    "ten" :   10
}

var stringCalc = {
  wordsToNum : function(wordA, wordB){
    return num[wordA] + num[wordB];
  }
}


var assert = require('chai').assert;

suite("wordsToNum(), will convert two written numbers to numerals and return the sum", function() {
  test('should return "0" when given "zero" and "zero"', function(){
    assert.equal(0, stringCalc.wordsToNum("zero", "zero"));
  })
  test('should return a number when given a word', function(){
    assert.typeOf(stringCalc.wordsToNum("zero", "zero"), 'number' );
  })
  test('should return "3" when given "one" and "two"', function(){
    assert.equal(3, stringCalc.wordsToNum("one", "two"));
  })
  test('should return "2" when given "one" and "one"', function(){
    assert.equal(2, stringCalc.wordsToNum("one", "one"));
  })
  test('should return "5" when given "three" and "two"', function(){
    assert.equal(5, stringCalc.wordsToNum("three", "two"));
  })
  test('should return "10" when given "four" and "six"', function(){
    assert.equal(10, stringCalc.wordsToNum("four", "six"));
  })
  test('should return "15" when given "five" and "ten"', function(){
    assert.equal(15, stringCalc.wordsToNum("five", "ten"));
  })
  test('should return "6" when given "six" and "zero"', function(){
    assert.equal(6, stringCalc.wordsToNum("six", "zero"));
  })
  test('should return "11" when given "seven" and "four"', function(){
    assert.equal(11, stringCalc.wordsToNum("seven", "four"));
  })
  test('should return "9" when given "eight" and "one"', function(){
    assert.equal(9, stringCalc.wordsToNum("eight", "one"));
  })
  test('should return "9" when given "three" and "six"', function(){
    assert.equal(9, stringCalc.wordsToNum("three", "six"));
  })
  test('should return "10" when given "ten" and "zero"', function(){
    assert.equal(10, stringCalc.wordsToNum("ten", "zero"));
  })
})
