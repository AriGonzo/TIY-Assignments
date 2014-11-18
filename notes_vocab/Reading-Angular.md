# Reading Angular

## Functions

### angular.module

  * arguments:
    * the name of the module as a string,
    * dependencies array (optional)
    * config function
  * return value: new module with the angular.Module api.
  * example:
  ```
  var myModule = angular.module('myModule', []);
  ```

### angular.extends

  * arguments:
    * Destination object
    * Source object(s).
  * return value:Reference to destination
  * example:
    ```
    angular.extend($scope, {
        thingOne: ‘one’,
        thingTwo: ‘two’
    });
    ```

### angular.copy

  * arguments:
    * The source that will be used to make a copy. Can be any type, including primitives, null, and undefined.
    * Destination into which the source is copied. If provided, must be of the same type as source.
  * return value: The copy or updated destination, if destination was specified.
  * example:
  ```
   angular.copy($scope.master, $scope.user);
   ```

### angular.element

  * arguments:
    * HTML string or DOMElement to be wrapped into jQuery.
  * return value:
    * jQuery object
  * example:
    ```
    var validElement = angular.element('<div>{{ model.input }}</div>');
    ```

## Directive

### ngApp

* arguments:
* return value:
* example:

### ngBind

* arguments:
* return value:
* example:

### ngClass

* arguments:
* return value:
* example:

### ngClick

* arguments:
* return value:
* example:

### ngController

* arguments:
* return value:
* example:

### ngDblclick

* arguments:
* return value:
* example:

### ngForm

* arguments:
* return value:
* example:

### ngKeyup

* arguments:
* return value:
* example:

### ngModel

* arguments:
* return value:
* example:

### ngRepeat

* arguments:
* return value:
* example:

### ngSubmit

* arguments:
* return value:
* example:
