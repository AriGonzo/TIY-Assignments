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

thousands = ["zero", "one thousand ", "two thousand ", "three thousand ", "four thousand",
             "five thousand ", "six thousand ", "seven thousand ", "eight thousand ",
             "nine thousand"]

  function num2letter(num) {
    var cents = ((num - Math.floor(num)).toFixed(2) * 100)
    num = Math.floor(num)
    var val = num.toString();

    if (num < 20){
    return ones[num] + " dollars and " + cents + "/100 cents";
  }
    if (num < 100) {
      if (num % 10 === 0) {
      return tens[val[0]] + "dollars and " + cents + "/100 cents";
    } {
      return tens[val[0]] + ones[val[1]] + " dollars and " + cents + "/100 cents";
    }
  }
  if (num < 1000) {
    if (val[1] === '0' && val[2] === '0') {
    return hundreds[val[0]] + "dollars and " + cents + "/100 cents";
    }
    if (val[1] < 2) {
    return hundreds[val[0]] + teens[val[2]] + " dollars and " + cents + "/100 cents";
    }
    if (num % 10 === 0) {
      return hundreds[val[0]] + tens[val[1]] + "dollars and " + cents + "/100 cents";
    } {
      return hundreds[val[0]] + tens[val[1]] + ones[val[2]] + " dollars and " + cents + "/100 cents";
    }
  }
}


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
