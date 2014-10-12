 function toEnglish(value){
   var ones = ["zero", "one", "two", "three", "four", "five", "six",
               "seven", "eight", "nine", "ten", "eleven", "twelve",
               "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
               "eighteen", "nineteen"];

   var tens = [, "ten", "twenty", "thirty", "forty", "fifty",
               "sixty", "seventy", "eighty", "ninety"];

   value = Number(value).toFixed(2);
   var checkEnd = value.slice(-2) + '/100 dollars';
   var cash = value.slice(0,-3);
   var hundred = ' hundred ';
   var thousand = ' thousand ';
   var tenK = value.slice(0, -6);  //credit to Logan on line 15 and 16
   var twentyKPlus = value.slice(0, -6);


   if(value < 20){
     return ones[cash] + ' ' + checkEnd;
   }
   else if(value < 100){
     if(value % 10 == 0){
       return tens[cash[0]] + ' ' + checkEnd;
     }
     else {
       return tens[cash[0]] + ' ' + ones[cash[1]] + ' ' + checkEnd;
     }
   }
   else if(value < 1000){
      if(value % 100 == 0){
       return ones[cash[0]] + hundred + checkEnd;
     }
     else {
     return ones[cash[0]] + hundred + tens[cash[1]] + ' ' + ones[cash[2]] + ' ' + checkEnd;
   }
 }
   else if(value < 10000){
     if(value % 1000 == 0){
       return ones[cash[0]] + thousand + checkEnd;
   } else {
       return ones[cash[0]] + thousand + ones[cash[1]] + hundred + tens[cash[2]] + ' ' + ones[cash[3]] + ' ' + checkEnd;
     }
   }
}
 console.log(toEnglish(110));
