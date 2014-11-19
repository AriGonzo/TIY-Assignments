# Reading Angular

## Functions

### angular.module
The angular.module is a global place for creating, registering and retrieving Angular modules. All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism.

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
Extends the destination object dst by copying own enumerable properties from the src object(s) to dst. You can specify multiple src objects. If you want to preserve original objects, you can do so by passing an empty object as the target: var object = angular.extend({}, object1, object2). Note: Keep in mind that angular.extend does not support recursive merge (deep copy).

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
Creates a deep copy of source, which should be an object or an array.

  * arguments:
    * The source that will be used to make a copy. Can be any type, including primitives, null, and undefined.
    * Destination into which the source is copied. If provided, must be of the same type as source.
  * return value: The copy or updated destination, if destination was specified.
  * example:
  ```
   angular.copy($scope.master, $scope.user);
   ```

### angular.element
Wraps a raw DOM element or HTML string as a jQuery element.

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
Use this directive to auto-bootstrap an AngularJS application. The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags.

* arguments:
  * application module name to load. [optional]
  * if this attribute is present on the app element, the injector will be created in "strict-di" mode.
* example:
  ```
  <div ng-app="ngAppStrictDemo" ng-strict-di>
  ```

### ngBind
The ngBind attribute tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.

* arguments:
  * an ```{{ expression }}``` to evaluate
* example:
```
<script>
  angular.module('bindExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.name = 'Whirled';
    }]);
</script>
<div ng-controller="ExampleController">
  Enter name: <input type="text" ng-model="name"><br>
  Hello <span ng-bind="name"></span>!
</div>
```

### ngClass
The ngClass directive allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

* arguments:
  * Expression to eval. The result of the evaluation can be a string representing space delimited class names, an array, or a map of class names to boolean values. In the case of a map, the names of the properties whose values are truthy will be added as css classes to the element.
* example:
```
<p ng-class="{strike: deleted, bold: important, red: error}">Map Syntax Example</p>
```

### ngClick
The ngClick directive allows you to specify custom behavior when an element is clicked.

* arguments:
  * Expression to evaluate upon click.
* example:
```
<button ng-click="count = count + 1" ng-init="count=0">
```

### ngController
The ngController directive attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the Model-View-Controller design pattern.

* arguments:
  * Name of a constructor function registered with the current $controllerProvider or an expression that on the current scope evaluates to a constructor function.
* example:
```
<div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
```

### ngDblclick
The ngDblclick directive allows you to specify custom behavior on a dblclick event.

* arguments:
  * Expression to evaluate upon a dblclick.
* example:
```
<button ng-dblclick="count = count + 1" ng-init="count=0">
```

### ngForm
Nestable alias of form directive. HTML does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a sub-group of controls needs to be determined.

* arguments:
  * Name of the form as string
* example:
```
<ng-form
  [name=""]>
...
</ng-form>
```

### ngKeyup
Specify custom behavior on keyup event.

* arguments:
  * Expression to evaluate upon keyup.
* example:
```
<input ng-keyup="count = count + 1" ng-init="count=0"> key up count: {{count}}
```

### ngModel
The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

* example:
```
<input ng-model="val" ng-pattern="/^\d+$/" name="anim" class="my-input" />
```

### ngRepeat
The ngRepeat directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

* arguments:
  * The expression indicating how to enumerate a collection. These formats are currently supported:
* example:
```
<footer ng-repeat-end>
  Footer {{ item }}
</footer>
```

### ngSubmit
Enables binding angular expressions to onsubmit events.

* arguments:
  * Expression to evaluate
* example:
```
<form ng-submit="submit()" ng-controller="ExampleController">
```
