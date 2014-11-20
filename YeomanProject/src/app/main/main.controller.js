'use strict';

angular.module('yeomanProject')
  .controller('MainCtrl', function ($http, $interpolate) {
    var apiUrl = 'https://api.github.com/repos/TheIronYard--Orlando/FEE--2014--FALL/issues/417/comments'
    var apiKeyTpl = $interpolate('?access_token={{key}}');
    var self = this;

    // this.apiKey = $cookies.apiKey;

    this.comments = [];

    $http.get(apiUrl)
      .success(function(data){
        self.comments = data;
      });

    this.date = new Date();

    this.commentLimit = 140;

    this.timeElapsed = function(timeNow, timeStamp){
      timeNow = Date.parse(this.date);
      timeStamp = Date.parse(this.comments.created_at);
      
      if(timeNow < timeStamp){
        return true;
      }
    }

    this.addComment = function(text, apiKey){
      var url = apiUrl + apiKeyTpl({key: apiKey})

      // $cookies.apiKey = apiKey

      $http.post(url, {body: text})
        .success(function(data){
          self.comments.push(data);
        })
    }

    this.awesomeThings = [
      {
        'key': 'angular',
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'key': 'browsersync',
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'key': 'gulp',
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'key': 'jasmine',
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'key': 'karma',
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'key': 'protractor',
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'key': 'jquery',
        'title': 'jQuery',
        'url': 'http://jquery.com/',
        'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
        'logo': 'jquery.jpg'
      },
      {
        'key': 'bootstrap',
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'key': 'node-sass',
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      }
    ];
    angular.forEach(this.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
