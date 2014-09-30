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

function convL2N(words) {
  if (words == "one") {
    words = 1;
  }
  if (words == "two") {
    words = 2;
  }
  if (words == "three") {
    words = 3;
  }
  return words;
}

function test_convL2N(a, b) {
 console.log('it should convert "' + a + '" to ' + b + ': ',
    convL2N(a) === b);
}

test_convL2N('one', 1);
test_convL2N('two', 2);

function test_subtract() {

}

function subtract(a, b) {
  a = convL2N(a);
  b = convL2N(b);
  return a - b;
}

function test_subtract(a, b, c) {
  console.log('it should subtract "' + a + '" and ' + b + ': ',
    subtract(a, b) === c);
}


test_subtract("one", "two", -1);
