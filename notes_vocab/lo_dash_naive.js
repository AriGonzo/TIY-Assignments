function someAri(array, value) {
  array.forEach(function(element, index){
    if(value === element){
      return true;
    }
  });
}

var array = ['blue', 'donkey', 'red', 'elephant']

console.log(someAri(array, 'donkey'))
