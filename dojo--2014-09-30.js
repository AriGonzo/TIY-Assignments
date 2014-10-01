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
  if (word == "one"){
    word = 1;
  }
  if (word == "two"){
    word = 2;
  }
  if (word == "three"){
    word = 3;
  }
  if (word == "four"){
    word = 4;
  }
  if (word == "five"){
    word = 5;
  }
  if (word == "six"){
    word = 6;
  }
  if (word == "seven"){
    word = 7;
  }
  if (word == "eight"){
    word = 8;
  }
  if (word == "nine"){
    word = 9;
  }
  if (word == "ten"){
    word = 10;
  }
    return word
}

function test_wordsToNum(a, b){
  console.log('it should convert "' + a + '" to ' + b + ': ',
    wordsToNum(a) === b);
}

function add(a, b){
  a = wordsToNum(a);
  b = wordsToNum(b);

  return a + b;
}

function test_add(a, b, c){
  console.log('It should add "' + a + '" and "' + b + '": ',
    add(a, b) === c);
  }

test_add("seven", "three", 10)
test_add("nine", "five", 14)
test_add("six", "eight", 14)

console.log(add("one", "one") === 2)
console.log(add("one", "two") === 3)
console.log(add("one", "three") === 4)
console.log(add("one", "four") === 5)
console.log(add("one", "five") === 6)
console.log(add("one", "six") === 7)
console.log(add("one", "seven") === 8)
console.log(add("eight", "three") === 11)
