```javascript
    var defaultOptions = {
          offset: 10,
          showLabel: true,
          showGrid: true,
        },
```
* Variable:
* ==========
* symbol = defaultOptions

* Type Literal
* ============
* Name: Number
* Symbol: 10
*
* Type Literal
* ============
* Name: Boolean
* Symbol: True


```javascript
    return String.fromCharCode(97 + n % 26);
  };
```
* Operator
* ==========
* name: Assignment Operator
* symbol:  =
*
* Operator
* ==========
* name: Addition
* symbol:  +
*
* Operator
* ==========
* name: Modulus
* symbol:  %
*  
* Type Literal
* ============
* Name: Number
* Symbol: 97
*
* Type Literal
* ============
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

* Type Literal
* ============
* Name: Number
* Symbol: 0
*
* Type Literal
* ============
* Name: Number
* Symbol: 60
*
* Type Literal
* ============
* Name: Boolean
* Symbol: True
*
* Type Literal
* ============
* Name: Boolean
* Symbol: False

```javascript
      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      };
```

* Variable:
* ==========
* symbol = center
*
* Operator
* ==========
* name: Assignment Operator
* symbol:  =
*
* Type Literal
* ============
* Name: Number
* Symbol: 2
*
* Operator
* ==========
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

* Operator
* ==========
* name: Division
* symbol:  /
*
* Variable:
* ==========
* symbol = endAngle
*
* Type Literal
* ============
* Name: Number
* Symbol: 360
*
* Type Literal
* ============
* Name: Number
* Symbol: 359.99
*
* Type Literal
* ============
* Name: Number
* Symbol: 0.01
*
* Operator
* ==========
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
* * Variable:
* ==========
* symbol = chartistGuyData
* String = '1st', '2nd', '3rd', 'Workers', 'Nobles'
