```javascript
    var defaultOptions = {
          offset: 10,
          showLabel: true,
          showGrid: true,
        },
```
Variable:
==========
* symbol = defaultOptions

Type Literal
============
* Name: Number
* Symbol: 10

Type Literal
============
* Name: Boolean
* Symbol: True


```javascript
    return String.fromCharCode(97 + n % 26);
  };
```
Operator
==========
* name: Assignment Operator
* symbol:  =

Operator
==========
* name: Addition
* symbol:  +

Operator
==========
* name: Modulus
* symbol:  %

Type Literal
============
* Name: Number
* Symbol: 97

Type Literal
============
* Name: Number
* Symbol: 26


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

Type Literal
============
* Name: Number
* Symbol: 0

Type Literal
============
* Name: Number
* Symbol: 60

Type Literal
============
* Name: Boolean
* Symbol: True

Type Literal
============
* Name: Boolean
* Symbol: False

```javascript
      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      };
```

Variable:
==========
* symbol = center

Operator
==========
* name: Assignment Operator
* symbol:  =

Type Literal
============
* Name: Number
* Symbol: 2

Operator
==========
* name: Division
* symbol:  /


```javascript
        var endAngle = startAngle + dataArray[i] / totalDataSum * 360;
        // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees
        if(endAngle - startAngle === 360) {
          endAngle -= 0.01;
        }
```

Operator
==========
* name: Division
* symbol:  /

Variable:
==========
* symbol = endAngle

Type Literal
============
* Name: Number
* Symbol: 360

Type Literal
============
* Name: Number
* Symbol: 359.99

Type Literal
============
* Name: Number
* Symbol: 0.01

Operator
==========
* name: Subtraction
* symbol:  -

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
Variable:
==========
* symbol = chartistGuyData

Type Literal
============
* Name: String
* Symbol: "..." / '...'
* Values = '1st', '2nd', '3rd', 'Workers', 'Nobles'

```javascript
function() {
  var arrayProto = Array.prototype,
      slice = arrayProto.slice,
      _each = arrayProto.forEach;
```

forEach Method
=======
* symbol: .forEach

Operator
==========
* name: Assignment Operator
* symbol:  =

Variable:
==========
* symbol = arrayProto
* value = Array

```javascript
    for (var i = 0, length = arguments.length; i < length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) { }
    }
```
Variable
==========
* symbol = lambda
* value = Array Element

Keyword
===========
* name: conditional
* symbol: for

Keyword
==========
*  name: Variable Declaration
* symbol: var

Operator
==========
* name: Assignment Operator
* symbol:  =

```javascript
function $w(string) {
  if (!Object.isString(string)) return [];
  string = string.strip();
  return string ? string.split(/\s+/) : [];
}
```
Keyword
===========
* name: conditional
* symbol: if

Type Literal
============
* name: Array
* symbol: [ ]

Operator
============
* symbol: ?
* type: conditional

```javascript
  function each(iterator, context) {
    for (var i = 0, length = this.length >>> 0; i < length; i++) {
      if (i in this) iterator.call(context, this[i], i, this);
    }
  }
  if (!_each) _each = each;
```
Keyword
==========
*  name: Variable Declaration
* symbol: var

Keyword
===========
* name: conditional
* symbol: for

Keyword
===========
* name: conditional
* symbol: if

```javascript
  function clear() {
    this.length = 0;
    return this;
```

Keyword
========
* name: Function declaration
* symbol: function

Operator
==========
* name: Assignment Operator
* symbol:  =

Type Literal
============
* Name: Number
* Symbol: 0

```javascript
    i = Number(i);
    if (isNaN(i)) {
      i = 0;
    } else if (i !== 0 && isFinite(i)) {
```

Operator
==========
* name: Assignment Operator
* symbol:  =

Type Literal
============
* Name: Number
* Symbol: 0

Keyword
===========
* name: conditional
* symbol: if

Keyword
===========
* name: conditional
* symbol: else/if

Operator
==========
* name: Comparison Operator
* symbol:  !==

```javascript
if(typeof module === "object"){
  var Terraformer = require("terraformer");
  Terraformer.ArcGIS = require("../terraformer-arcgis-parser.js");
}
```
Keyword
===========
* name: conditional
* symbol: if

Operator
==========
* name: Strictly Equals
* symbol:  ===

Type Literal
============
* Name: String
* Symbol: "..." / '...'
* Values = 'object' "terraformer" "../terraformer-arcgis-parser.js"

```javascript
describe("ArcGIS Tools", function(){

  it("should convert a GeoJSON Point to an ArcGIS Point", function() {
    var input = {
      "type": "Point",
      "coordinates": [-58.7109375,47.4609375]
    };
```
Keyword
===========
* name:testing function
* symbol: describe

Keyword
========
* name: Function invocation
* symbol: function()

Variable:
==========
* symbol = input

Operator
==========
* name: Assignment Operator
* symbol:  =

Type Literal
============
* Name: String
* Symbol: "..." / '...'
* Values = "type" "Point" "coordinates"

```javascript
    for (var j = 1; j < strings.length; j += 2) {
      // j is the offset for the x value
      // Convert the value from base 32 and add the previous x value
      x = (parseInt(strings[j], 32) + xDiffPrev);
      xDiffPrev = x;
```
Keyword
===========
* name: conditional
* symbol: for
* operation: loop

Variable:
==========
* symbol = j
* value = 1

```javascript
points.push([x / coefficient, y / coefficient]);
```
Method
=========
* symbol: .push
* operation: push value to array

```javascript
			function onTabClick()
```

Keyword
========
* name: Function declaration
* symbol: function

```javascript
for (var i = 0; i < array.length; i++)
```
Keyword
===========
* name: conditional
* symbol: for
* operation: loop

Keyword
==========
*  name: Variable Declaration
* symbol: var

Operator
==========
* name: Assignment Operator
* symbol:  =

Operator
==========
* name: Comparison Operator
* value: less than
* symbol:  <

Operator
==========
* name: Arithmetic Operator
* value: Increment
* symbol:  ++
