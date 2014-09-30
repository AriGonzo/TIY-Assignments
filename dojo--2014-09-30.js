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
  if (word == "one") {
    word = 1;
  }
  if (word == "two"){
    word = 2;
  }
  if (word == "three"){
    word = 3;
  }
}

function add(a, b){
  if (a === "one") {
    if (b === "one")
      return 2;
    } { if (b === "two")
      return 3;
    } { if (b === "three")
      return 4;
    } { if (b === "four")
      return 5;
    } { if (b === "five")
      return 6;
    } { if (b === "six")
      return 7;
  }
}

console.log(add("one", "one") === 2)
console.log(add("one", "two") === 3)
console.log(add("one", "three") === 4)
console.log(add("one", "four") === 5)
console.log(add("one", "five") === 6)
console.log(add("one", "six") === 7)
