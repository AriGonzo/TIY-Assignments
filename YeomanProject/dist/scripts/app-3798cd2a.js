"use strict";angular.module("yeomanProject",["ngResource","ngRoute"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("yeomanProject").controller("MainCtrl",["$http","$interpolate",function(e,a){var t="https://api.github.com/repos/TheIronYard--Orlando/FEE--2014--FALL/issues/417/comments",o=a("?access_token={{key}}"),r=this;this.comments=[],e.get(t).success(function(e){r.comments=e}),this.date=new Date,this.commentLimit=140,this.timeElapsed=function(e,a){return e=Date.parse(this.date),a=Date.parse(this.comments.created_at),a>e?!0:void 0},this.addComment=function(a,n){var s=t+o({key:n});e.post(s,{body:a}).success(function(e){r.comments.push(e)})},this.awesomeThings=[{key:"angular",title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{key:"browsersync",title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{key:"gulp",title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{key:"jasmine",title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{key:"karma",title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{key:"protractor",title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{key:"jquery",title:"jQuery",url:"http://jquery.com/",description:"jQuery is a fast, small, and feature-rich JavaScript library.",logo:"jquery.jpg"},{key:"bootstrap",title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{key:"node-sass",title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}],angular.forEach(this.awesomeThings,function(e){e.rank=Math.random()})}]),angular.module("yeomanProject").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),function(e){try{e=angular.module("yeomanProject")}catch(a){e=angular.module("yeomanProject",[])}e.run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn btn-lg btn-success" ng-href="#">Splendid!</a></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div><hr><div class="footer"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></div></div>')}])}(),function(e){try{e=angular.module("yeomanProject")}catch(a){e=angular.module("yeomanProject",[])}e.run(["$templateCache",function(e){e.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul></div></nav>')}])}();