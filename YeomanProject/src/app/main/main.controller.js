'use strict';

angular.module('yeomanProject', ["firebase"])
  .controller('MainCtrl', function ($firebase, $firebaseAuth) {
    var ref = new Firebase('https://github-comments.firebaseio.com/');
    var sync = $firebase(ref);
    var auth = $firebaseAuth(ref);
    var syncObject = sync.$asObject();

    syncObject.$bindTo(this, "data");
    this.messages = sync.$asArray();

    var self = this;

    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.uid);
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

    this.timeElapsed = function(timeNow, timeStamp){
      timeNow = Date.parse(this.date);
      timeStamp = Date.parse(this.comments.created_at);
      
      if(timeNow < timeStamp){
        return true;
      }
    }

    this.addMessage = function(newMessageText){
    }



  });
