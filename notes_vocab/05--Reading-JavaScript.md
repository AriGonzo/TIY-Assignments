#### 1
```javascript
    var defaultOptions = {
          offset: 10,
          showLabel: true,
          showGrid: true,
        },
```
* Variable:
  * symbol = defaultOptions

* Type Literal
  * Name: Number
  * Symbol: 10

* Type Literal
  * Name: Boolean
  * Symbol: True

#### 2
```javascript
    return String.fromCharCode(97 + n % 26);
  };
```
* Operator
  * name: Assignment Operator
  * symbol:  =

* Operator
  * name: Addition
  * symbol:  +

* Operator
  * name: Modulus
  * symbol:  %

* Type Literal
  * Name: Number
  * Symbol: 97

* Type Literal
  * Name: Number
  * Symbol: 26

#### 3
```javascript
        startAngle: 0,
        total: undefined,
        donut: false,
        donutWidth: 60,
        showLabel: true,
        labelOffset: 0,
        labelInterpolationFnc: Chartist.noop,
        labelOverflow: false,
        labelDirection: 'neutral'
      },
```

* Type Literal
  * Name: Number
  * Symbol: 0

* Type Literal
  * Name: Number
  * Symbol: 60

* Type Literal
  * Name: Boolean
  * Symbol: True

* Type Literal
  * Name: Boolean
  * Symbol: False

#### 4
```javascript
      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      };
```

* Variable:
  * symbol = center

* Operator
  * name: Assignment Operator
  * symbol:  =

* Type Literal
  * Name: Number
  * Symbol: 2

* Operator
  * name: Division
  * symbol:  /

#### 5
```javascript
        var endAngle = startAngle + dataArray[i] / totalDataSum * 360;
        // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees
        if(endAngle - startAngle === 360) {
          endAngle -= 0.01;
        }
```

* Operator
  * name: Division
  * symbol:  /

* Variable:
  * symbol = endAngle

* Type Literal
  * Name: Number
  * Symbol: 360

* Type Literal
  * Name: Number
  * Symbol: 359.99

* Type Literal
  * Name: Number
  * Symbol: 0.01

* Operator
  * name: Subtraction
  * symbol:  -

#### 6
```javascript
  var chartistGuyData = {
    labels: ['1st', '2nd', '3rd'],
    series: [
      {
        name: 'Workers',
        data: [1283000, 1500000, 5706000]
      },
      {
        name: 'Nobles',
        data: [1883000, 2050000, 3706000]
      }
    ]
  };
```
* Variable:
  * symbol = chartistGuyData

* Type Literal
  * Name: String
  * Symbol: "..." / '...'
  * Values = '1st', '2nd', '3rd', 'Workers', 'Nobles'

#### 7
```javascript
function() {
  var arrayProto = Array.prototype,
      slice = arrayProto.slice,
      _each = arrayProto.forEach;
```

* forEach Method
  * symbol: .forEach

* Operator
  * name: Assignment Operator
  * symbol:  =

* Variable:
  * symbol = arrayProto
  * value = Array

#### 8
```javascript
    for (var i = 0, length = arguments.length; i < length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) { }
    }
```
* Variable
  * symbol = lambda
  * value = Array Element

* Keyword
  * name: conditional
  * symbol: for

* Keyword
  *  name: Variable Declaration
  * symbol: var

* Operator
  * name: Assignment Operator
  * symbol:  =

#### 9
```javascript
function $w(string) {
  if (!Object.isString(string)) return [];
  string = string.strip();
  return string ? string.split(/\s+/) : [];
}
```
* Keyword
  * name: conditional
  * symbol: if

* Type Literal
  * name: Array
  * symbol: [ ]

* Operator
  * symbol: ?
  * type: conditional

#### 10
```javascript
  function each(iterator, context) {
    for (var i = 0, length = this.length >>> 0; i < length; i++) {
      if (i in this) iterator.call(context, this[i], i, this);
    }
  }
  if (!_each) _each = each;
```
* Keyword
  *  name: Variable Declaration
  * symbol: var

* Keyword
  * name: conditional
  * symbol: for

* Keyword
  * name: conditional
  * symbol: if

#### 11
```javascript
  function clear() {
    this.length = 0;
    return this;
```

* Keyword
  * name: Function declaration
  * symbol: function

* Operator
  * name: Assignment Operator
  * symbol:  =

* Type Literal
  * Name: Number
  * Symbol: 0

#### 12
```javascript
    i = Number(i);
    if (isNaN(i)) {
      i = 0;
    } else if (i !== 0 && isFinite(i)) {
```

* Operator
  * name: Assignment Operator
  * symbol:  =

* Type Literal
  * Name: Number
  * Symbol: 0

* Keyword
  * name: conditional
  * symbol: if

* Keyword
  * name: conditional
  * symbol: else/if

* Operator
  * name: Comparison Operator
  * symbol:  !==

#### 13
```javascript
if(typeof module === "object"){
  var Terraformer = require("terraformer");
  Terraformer.ArcGIS = require("../terraformer-arcgis-parser.js");
}
```
* Keyword
  * name: conditional
  * symbol: if

* Operator
  * name: Strictly Equals
  * symbol:  ===

* Type Literal
  * Name: String
  * Symbol: "..." / '...'
  * Values = 'object' "terraformer" "../terraformer-arcgis-parser.js"

#### 14
```javascript
describe("ArcGIS Tools", function(){

  it("should convert a GeoJSON Point to an ArcGIS Point", function() {
    var input = {
      "type": "Point",
      "coordinates": [-58.7109375,47.4609375]
    };
```
* Keyword
  * name:testing function
  * symbol: describe

* Keyword
  * name: Function invocation
  * symbol: function()

* Variable
  * symbol = input

* Operator
  * name: Assignment Operator
  * symbol:  =

* Type Literal
  * Name: String
  * Symbol: "..." / '...'
  * Values = "type" "Point" "coordinates"

#### 15
```javascript
    for (var j = 1; j < strings.length; j += 2) {
      // j is the offset for the x value
      // Convert the value from base 32 and add the previous x value
      x = (parseInt(strings[j], 32) + xDiffPrev);
      xDiffPrev = x;
```
* Keyword
  * name: conditional
  * symbol: for
  * operation: loop

* Variable
  * symbol = j
  * value = 1

#### 16
```javascript
points.push([x / coefficient, y / coefficient]);
```
* Method
  * symbol: .push
  * operation: push value to array

#### 17
```javascript
			function onTabClick()
```

* Keyword
  * name: Function declaration
  * symbol: function

#### 18
```javascript
for (var i = 0; i < array.length; i++)
```
* Keyword
  * name: conditional
  * symbol: for
  * operation: loop

* Keyword
  *  name: Variable Declaration
  * symbol: var

* Operator
  * name: Assignment Operator
  * symbol:  =

* Operator
  * name: Comparison Operator
  * value: less than
  * symbol:  <

* Operator
  * name: Arithmetic Operator
  * value: Increment
  * symbol:  ++

#### 19
```javascript
describe("ArcGIS Tools", function(){
```

* Keyword
  * name:testing function
  * symbol: describe
  * UI: BDD

* Type Literal
  * Name: String
  * Symbol: "..." / '...'
  * Values = "ArcGIS Tools"

#### 20
```javascript
expect(output).toEqual({
```
* Keyword
  * name:testing function
  * symbol: expect/.toEqual
  * Library: Chai
  * Framework: Mocha

#### 21
```javascript
var input = {
      "type":"Feature",
```
* Keyword
  *  name: Variable Declaration
  * symbol: var

* Variable
  * symbol = input

* Operator
  * name: Assignment Operator
  * symbol:  =

* Keyword
  * name: key
  * symbol: "Type"
  * value: "Feature"

#### 22
```javascript
var bytes=[ 0x54, 0x65, 0x73, 0x74, 0x73, 0xd7, 0x90, 0xc2, 0xa2];
```
* Keyword
  *  name: Variable Declaration
  * symbol: var


* Variable:
  * symbol = bytes

* Operator
  * name: Assignment Operator
  * symbol:  =

* Type Literal
  * symbol: [ ]
  * type: Array

* Type Literal
  * Name: Number
  * Symbols: 0x54, 0x65, 0x73, 0x74, 0x73, 0xd7, 0x90, 0xc2, 0xa2

#### 23
```javascript
it('should encode and decode Russian', function() {
```
* Keyword
  * name:testing function
  * symbol: it
  * Framework: Mocha

* Type Literal
  * Name: String
  * Symbol: "..." / '...'
  * Values = 'should encode and decode Russian'

#### 24
```javascript
function Sizzle( selector, context, results, seed ) {
```

* Keyword
  * name: Function declaration
  * symbol: function

  * //@params: selector, context, results, seed

#### 25
```javascript
function listSheets (spreadsheet) {
```

* Keyword
  * name: Function declaration
  * symbol: function

  * //@params: spreadsheet
#### 26
```javascript
sheets = spreadsheet.getSheets();
```

* Operator
  * name: Assignment Operator
  * symbol:  =

* Keyword
  * symbol: getSheets()
  * type: Function Invocation

#### 27
```javascript
  for (i = 0; i < sheetNames.length; i +=1) {
```

* Keyword
  * name: conditional
  * symbol: for

* Variable:
  * symbol = i

* Operator
  * type: Comparison Operator
  * symbol: <

* Method
  * type: String method
  * symbol: .length

#### 28
```javascript
it('should work properly', function () {
```

* Keyword
  * name:testing function
  * symbol: it
  * Framework: Mocha

* Type Literal
  * Name: String
  * Symbol: "..." / '...'
  * Values = 'should work properly'

#### 29
```javascript
  describe('node insertion', function () {
```

* Keyword
  * name:testing function
  * symbol: describe

* Type Literal
  * Name: String
  * Symbol: "..." / '...'
  * Values = 'node insertion'

#### 30
```javascript
var astar = {
    init: function(graph) {
```

* Keyword
  *  name: Variable Declaration
  * symbol: var

* Variable:
  * symbol = astar

* Operator
  * type: assignment operator
  * symbol: =

* Keyword
  * name: key
  * symbol: "init"


#### 31
```javascript
document.addEventListener('deviceready', handleNfcFromIntentFilter, false);
```
* symbol: `document`
  * Type: identifier
  * name: "document"
  * meaning: name of an object

* symbol: `.`
  * Type: operator
  * name: ????
  * meaning: is between an object and a property or method
  * operands: `document` and `addEventListener`

* symbol: `addEventListener`
  * Type: identifier method invocation
  * name: "method addEventListener"
  * meaning: the key for the function in document

* symbol: `()`
  * Type: operator
  * name: "call/create instance"
  * meaning: invokes a function and holds the parameters, if any

* symbol: ` "device ready" `
  * Type: String
  * name: "string device ready"
  * meaning: a parameter of addEventListener, a string"

* symbol: `handleNfcFromIntentFilter`
  * Type: identifier
  * name: parameter handleNfcFromIntentFilter
  * meaning: a parameter of addEventListener, a variable

* symbol: `false`
  * type: Boolean
  * name: "boolean False"
  * meaning: opposite of true

#### 33
```javascript
window.lazySizes = factory();
```

* symbol: 'window'
  * Type: Identifier
  * name: "window"
  * meaning: name of an object

* symbol "."
  * Type: Operator
  * Name: dot
  * meaning: is between an object and a property or method
  * Operands: window, lazySizes

* symbol: "lazySizes"
  * Type: Identifier
  * Name: "lazySizes"
  * meaning: is the definition of a method to window

* symbol: "="
  * Type: Operator
  * Name: "is assigned"
  * meaning: assigns the value on the right to the element on the left
  * Operands: window.lazySizes, factory()

* symbol: "factory()"
  * Type: function definition
  * Name: "function factory"
  * meaning:

#### 34
```javascript
function Author(name, books) {
```

* symbol: "function"
  * Type: keyword
  * Name: "function declaration"
  * meaning: literally declaring a function

* symbol: "Author"
  * type: identifier
  * Name: "Author"
  * meaning: name of the object constructor

* symbol: "()"
  * Type: operator
  * name: "call/create instance"
  * meaning: invokes a function and holds the parameters, if any

* symbol: "name"
  * Type: identifier
  * name: "passed the paramater name"
  * meaning: "parameter of the function Author"

* symbol: "books"
  * Type: identifier
  * name: "passed the paramater books"
  * meaning: "parameter of the function Author"
