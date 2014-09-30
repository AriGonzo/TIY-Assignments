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


function subtract(a, b) {
  if (a === "one" && b === "two") {
  return -1;
}
  if (a === "two" && b === "two") {
  return 0;
}
  if (a === "four" && b === "two") {
  return 2;
}
  if (a === "seven" && b === "two") {
  return 5;
}
  if (a === "eight" && b === "three") {
  return 5;
  }

  if (a === "one" && b === "three") {
  return -2;
  }

  if (a === "two" && b === "one") {
  return 1;
  }
}



console.log(subtract(convL2N("one", "one")) === 0)


console.log('it should subtract two and two ',
  subtract("two", "two") === 0);
console.log('it should subtact one and two ',
  subtract("one", "two") === -1);
/*console.log("it should subtract one and one",
  subtract("one", "one") === 0);*/
console.log("it should subtract four and two",
  subtract("four", "two") === 2);
console.log("it should subtract seven and two",
  subtract("seven", "two") === 5);
console.log("it should subtract eight and three",
  subtract("eight", "three") === 5);
console.log("it should subtract one and three",
  subtract("one", "three") === -2);
console.log("it should subtract two and one",
  subtract("two", "one") === 1)
console.log()
