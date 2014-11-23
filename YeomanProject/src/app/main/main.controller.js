'use strict';

angular.module('yeomanProject', ["firebase"])
  .controller('MainCtrl', function ($firebase, $firebaseAuth, $scope) {
    var ref = new Firebase('https://github-comments.firebaseio.com/');
    var sync = $firebase(ref);
    var auth = $firebaseAuth(ref);
    var syncObject = sync.$asObject();
    var self = this;

    syncObject.$bindTo($scope, "data");
    $scope.messages = sync.$asArray();

    var obj = $firebase(ref).$asObject();

    // obj.$bindTo($scope, "messages").then(function() {
    //   $scope.messages.name = self.displayName;
    //   ref.$set({name: self.displayName});
    // });

    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.facebook.displayName);
      self.displayName = authData.facebook.displayName;
      self.avatar = authData.facebook.cachedUserProfile.picture.data.url;
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
    
    this.date = new Date();

    // this.editComment = function(event){
    //   //clicking the edit button will change the comment to a text input
    //   $('#editBtn').html('Did it work?')

    //   $http.patch()
    // }

    this.commentLimit = 140;

    // this.timeElapsed = function(timeNow, timeStamp){
    //   timeNow = Date.parse(this.date);
    //   timeStamp = Date.parse(this.comments.created_at);
      
    //   if(timeNow < timeStamp){
    //     return true;
    //   }
    // }

    $scope.addMessage = function(messageText, messageAuthor){
        $scope.messages.$add({
          'text': messageText, 
          'author': messageAuthor,
          'avatar': self.avatar,
        });
        $scope.messageText = 'BOOYA';
        console.log($scope.messages);
    };



  });
