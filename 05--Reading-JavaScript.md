```javascript
    var defaultOptions = {
          offset: 10,
          showLabel: true,
          showGrid: true,
        },
```
* Variable: defaultOptions
* Number =  10
* Boolean = true
* Boolean = true
    
```javascript
    return String.fromCharCode(97 + n % 26);
  };
```
* Operators = '+' , '%'
* Number - 97, 26

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

* Number = 0, 60
* Boolean = false, true, false
* Value = undefined 

```javascript
      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      };
```

* Variable = center
* Number = 2
* Operator = '/'
 
```javascript
        var endAngle = startAngle + dataArray[i] / totalDataSum * 360;
        // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees
        if(endAngle - startAngle === 360) {
          endAngle -= 0.01;
        }
```

* Variable = endAngle
* Number = 360, 359.99, 0.01
* Operator = '/' , '-' , '*'

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
* Variable = chartistGuyData
* String = '1st', '2nd', '3rd', 'Workers', 'Nobles'
