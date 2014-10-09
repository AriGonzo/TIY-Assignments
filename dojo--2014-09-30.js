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

function wordsToNum(word) {
  if (word === "zero"){
    word = 0;
  }
  if (word === "one"){
    word = 1;
  }
  if (word === "two"){
    word = 2;
  }
  if (word === "three"){
    word = 3;
  }
  if (word === "four"){
    word = 4;
  }
  if (word === "five"){
    word = 5;
  }
  if (word === "six"){
    word = 6;
  }
  if (word === "seven"){
    word = 7;
  }
  if (word === "eight"){
    word = 8;
  }
  if (word === "nine"){
    word = 9;
  }
  if (word === "ten"){
    word = 10;
  }
    return word
}

// function test_wordsToNum(a, b){
//   console.log('it should convert "' + a + '" to ' + b + ': ',
//     wordsToNum(a) === b);
// }

function add(a, b){
  return wordsToNum(a) + wordsToNum(b);
}

// function test_add(a, b, c){
//   console.log('It should add "' + a + '" and "' + b + '": ',
//     add(a, b) === c);
//   }

var assert = require('assert');

suite(wordsToNum(), function() {
  test('should return "0" when given "zero"', function(){
    assert.equal(0, wordsToNum("zero"));
  })
  test('should return "1" when given "one"', function(){
    assert.equal(1, wordsToNum("one"));
  })
  test('should return "2" when given "two"', function(){
    assert.equal(2, wordsToNum("two"));
  })
  test('should return "3" when given "three"', function(){
    assert.equal(3, wordsToNum("three"));
  })
  test('should return "4" when given "four"', function(){
    assert.equal(4, wordsToNum("four"));
  })
  test('should return "5" when given "five"', function(){
    assert.equal(5, wordsToNum("five"));
  })
  test('should return "6" when given "six"', function(){
    assert.equal(6, wordsToNum("six"));
  })
  test('should return "7" when given "seven"', function(){
    assert.equal(7, wordsToNum("seven"));
  })
  test('should return "8" when given "eight"', function(){
    assert.equal(8, wordsToNum("eight"));
  })
  test('should return "9" when given "nine"', function(){
    assert.equal(9, wordsToNum("nine"));
  })
  test('should return "10" when given "ten"', function(){
    assert.equal(10, wordsToNum("ten"));
  })
})

suite(add(), function() {
  test('should return 0 as sum of "0" and "0"', function(){
    assert.equal(0, add(0, 0));
  });
  test('should return 1 as sum of "0" and "1"', function(){
    assert.equal(1, add(0, 1));
  })
  test('should return 6 as sum of "4" and "2"', function(){
    assert.equal(6, add(4, 2));
  })
  test('should return 10 as sum of "5" and "5"', function(){
    assert.equal(10, add(5, 5));
  })
  test('should return 20 as sum of "10" and "10"', function(){
    assert.equal(20, add(10, 10));
  })
  test('should return 14 as sum of "9" and "5"', function(){
    assert.equal(14, add(9, 5));
  })
  test('should return 18 as sum of "10" and "8"', function(){
    assert.equal(18, add(10, 8));
  })
  test('should return 2 as sum of "1" and "1"', function(){
    assert.equal(2, add(1, 1));
  })
  test('should return 9 as sume of "7" and "2"', function(){
    assert.equal(9, add(7, 2));
  })
})
//
// console.log(add("three", "eight"))
//
// test_add("zero", "five", 5)
// test_add("seven", "three", 10)
// test_add("nine", "five", 14)
// test_add("six", "eight", 14)
// test_add("one", "one", 2)
// test_add("seven", "two", 9)
// test_add("five", "eight", 13)
// test_add("three", "four", 7)
//
// console.log(add("one", "one") === 2)
// console.log(add("one", "two") === 3)
// console.log(add("one", "three") === 4)
// console.log(add("one", "four") === 5)
// console.log(add("one", "five") === 6)
// console.log(add("one", "six") === 7)
// console.log(add("one", "seven") === 8)
// console.log(add("eight", "three") === 11)
