(function( window) {
  'use strict';

angular.module('profile', [ ])
  .controller('SideBar',['$http', function($http){
    
    var profileInfo = this;
    profileInfo.data = [];

    $http.get('data.json').success(function(data){
      profileInfo.data = data;
    });
  }]);

})(window);
