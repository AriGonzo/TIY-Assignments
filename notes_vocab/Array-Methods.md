### Properties

Array.prototype.constructor
Specifies the function that creates an object's prototype.

Array.prototype.length
Tells you the number of elements in the array

#### Mutator methods

_These methods modify the array_:

Array.prototype.copyWithin()**
Copies elements within the array

Array.prototype.fill()**
Fills an array from start to end with a value

Array.prototype.pop()
Removes the last element of an array and returns the value

_ex_
```javascript
var a = [1, 2, 3, 4]
a.pop() // 4
a === [1, 2, 3]
```

Array.prototype.push()
Adds one or more elements to the end of an array and returns the new array length

_ex_
```javascript
var a = [1, 2, 3, 4]
a.push(5) // 5
a === [1, 2, 3, 4, 5]
```

Array.prototype.reverse()
reverses the order of the array elements

_ex_
```javascript
var a = [1, 2, 3, 4, 5]
a.reverse() // [5, 4, 3, 2, 1]
a === [5, 4, 3, 2, 1]
```

Array.prototype.shift()
takes the first elements off of the array and returns that value

_ex_
```javascript
var a = [5, 4, 3, 2, 1]
a.shift  // 5
a === [4, 3, 2, 1]
```

Array.prototype.sort()
Sorts the elements of an array and returns the array

_ex_
```javascript
var a = [4, 3, 2, 1]
a.sort // [1, 2, 3, 4]
a === [1, 2, 3, 4]
```

Array.prototype.splice()
removes the elements out of the array. It is given an index starting point and the amount of numbers in the splice. returns the remaining elements after the splice

_ex_
```javascript
var a = [1, 2, 3, 4]
a.splice(0, 2) // [1, 2]
a === [3, 4]
```

Array.prototype.unshift()
Adds elements to the FRONT of the array and returns the array length (versus Array.prototype.push which puts it in the back)

_ex_
```javascript
var a = [3, 4]
a.unshift(1, 2) // 4
a === [1, 2, 3, 4]
```

#### Accessor methods

_These methods do not modify the array and return some representation of the array._

Array.prototype.concat()
concatenates arrays with other arrays and values. Must be placed into a variable. Changes do not stick

_ex_
```javascript
var a = ["well hello there"]
var b = ["Mr. Smith"]
var c = a.concat(b) // ['well hello there', 'Mr. Smith']
a === ["well hello there"]
b === ["Mr. Smith"]
c === ['well hello there', 'Mr. Smith']
```
Array.prototype.contains()**
Determines whether an array contains a certain element, responds with boolean

Array.prototype.join()
Joins all elements of an array into a string. Does not change the original array. Not to be used to combine 2 separate arrays, just the values IN an array

```javascript
var c === ['well hello there', 'Mr. Smith']
c = c.join() // 'well hello there,Mr. Smith'
c === ['well hello there,Mr. Smith']
```

Array.prototype.slice()
Extracts a section of an array and returns a new array. The method takes in a starting an amount of elements in the array. Sliced array does not change unless reassigned.

```javascript
var a = [1, 2, 3, 4, 5]
a.slice(0, 2) // [1, 2]
a === [1, 2, 3, 4, 5]
```

Array.prototype.toSource()!*
Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.

Array.prototype.toString()
Returns a string of the array and its contents. Does not reassign the variable.

```javascript
var a = [1, 2, 3, 4, 5]
a.toString() // '1, 2, 3, 4, 5'
a === [1, 2, 3, 4, 5]
```

Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method. (???)

Array.prototype.indexOf()
Gives you the FIRST index of the value you give it

```javascript
var a = ['elephant', 'car', 'boat', 'elephant']
a.indexOf('elephant') // 0
a = ['elephant', 'car', 'boat', 'elephant']
```

Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

```javascript
var a = ['elephant', 'car', 'boat', 'elephant']
a.indexOf('elephant') // 3
a = ['elephant', 'car', 'boat', 'elephant']
```

#### Iteration methods

_Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead._

Array.prototype.forEach()
Calls a function for each element in the array. Iterates over the list and performs the function on all of the elements

```javascript
var count = 0;
var a = ['elephant', 'dog', 'car', 'purple', 'elephant']
a.forEach(function(index){
  if (index === 'elephant') {
    count++;
    return count;
  }
})
console.log(count) // 2
```

Array.prototype.entries()**
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

Array.prototype.every()
Returns true if every element in this array satisfies the provided testing function.

```javascript
var THRESHOLD = 4
var test;
var a = [1, 2, 3, 4, 5]

test = a.every(function(element, index, array){
  console.log('element:', element);
  if (element <= THRESHOLD) {
    return true;
  }

  return false;
});

console.log('test: ', test) //element: 1
                            // element: 2
                            // element: 3
                            // element: 4
                            // element: 5
                            // test:  false
```

Array.prototype.some()
Returns true if at least one element in this array satisfies the provided testing function.

Array.prototype.filter()
Provide a function and .filter will return all elements for which the function evaluates to true

```javascript
var THRESHOLD = 3
var test;
var a = [1, 2, 3, 4, 5]

test = a.filter(function(element, index, array){
  if (element <= THRESHOLD) {
    return true;
  }

  return false;
});

console.log('test: ', test) // [1, 2, 3]
```

Array.prototype.find()**
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

Array.prototype.findIndex()**
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

Array.prototype.keys()**
Returns a new Array Iterator that contains the keys for each index in the array.

Array.prototype.map()
executes a function on each element of an array and returns the value in a new array

```javascript
var numbers = [11, 29, 2013]
var dates = numbers.map(function(num){
  return num + 60;
});

console.log(numbers)    // [11, 29, 2013]
console.log(dates)      // [71, 89, 2073]
```

Array.prototype.reduce()
Uses the previous return from a function as an argument for the next. (think Fibinocci sequence)

```javascript
var numbers = [11, 29, 2013].reduce(function(a, b) {
    return a / b;
});
console.log(numbers)    //0.0001884303749764462
```

Array.prototype.reduceRight()
just like reduce, but works right to left

```javascript
var numbers = [11, 29, 2013].reduce(function(a, b) {
    return a / b;
});
console.log(numbers)    //6.310344827586206
```

Array Generic Methods

Using array methods on a string or array like objects like arguments. Treating a string as an array of characters

```javascript
function isLetter(character) {
```

** = experimental API and should not be used in production code
!* = this API has not been standardized
