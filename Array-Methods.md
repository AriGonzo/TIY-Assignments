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

Array.prototype.push()
Adds one or more elements to the end of an array and returns the new array length

Array.prototype.reverse()
reverses the order of the array elements

Array.prototype.shift()
takes the first elements off of the array and returns that value

Array.prototype.sort()
Sorts the elements of an array and returns the array

Array.prototype.splice()
removes the elements out of the array

Array.prototype.unshift()
Adds elements to the FRONT of the array and returns the array length (opposite of Array.prototype.push)

#### Accessor methods

_These methods do not modify the array and return some representation of the array._

Array.prototype.concat()
concatenates arrays with other arrays and values

Array.prototype.contains()**
Determines whether an array contains a certain element, responds with boolean

Array.prototype.join()
Joins all elements of an array into a string.

Array.prototype.slice()
Extracts a section of an array and returns a new array.

Array.prototype.toSource()!*
Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.

Array.prototype.toString()
Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.

Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.

Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

#### Iteration methods

_Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead._

Array.prototype.forEach()
Calls a function for each element in the array.

Array.prototype.entries()**
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

Array.prototype.every()
Returns true if every element in this array satisfies the provided testing function.

Array.prototype.some()
Returns true if at least one element in this array satisfies the provided testing function.

Array.prototype.filter()
Creates a new array with all of the elements of this array for which the provided filtering function returns true.

Array.prototype.find()**
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

Array.prototype.findIndex()**
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

Array.prototype.keys()**
Returns a new Array Iterator that contains the keys for each index in the array.

Array.prototype.map()
Creates a new array with the results of calling a provided function on every element in this array.

Array.prototype.reduce()
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

Array.prototype.reduceRight()
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

** = experimental API and should not be used in production code
!* = this API has not been standardized
