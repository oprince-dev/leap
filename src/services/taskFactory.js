(function() {
  'use strict';

  angular.module('leap')
  .factory('userObject', function($firebaseArray) {
    var addTasks = function() {
      firebase.database().ref('users/' + user.uid +'/tasks').set({
      });
    };
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const userRef = firebase.database().ref().child('users/' + uid);
    const tasksRef= rootRef.child(tasks);
    const userObject = $firebaseArray(userRef);
    return userObject;
  });
})();
