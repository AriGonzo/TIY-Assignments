ones =     ["zero", "one", "two", "three", "four", "five",
            "six", "seven", "eight", "nine", "ten", "eleven",
            "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen"]

tens =     ["zero", "ten ", "twenty ", "thirty ", "fourty ", "fifty ",
            "sixty ", "seventy ", "eighty ", "ninety "]


  function num2letter(num) {
    var val = num.toString();

    if (num < 20){
    return ones[num];
  }
    if (num < 100) {
      if (num % 10 === 0) {
      return tens[val[0]];
    } {
      return tens[val[0]] + ones[val[1]];
    }
    // if (999 >= num >= 100) {
    //   return ones[num];
    // }
  }
}


console.log(num2letter(19))
console.log(num2letter(0))
console.log(num2letter(17))
console.log(num2letter(13))
console.log(num2letter(11))
console.log(num2letter(7))
console.log(num2letter(65))
console.log(num2letter(99))
console.log(num2letter(41))
console.log(num2letter(30))
