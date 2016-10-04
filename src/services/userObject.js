(function() {
  'use strict';

  angular.module('leap')
  .service('userObject', function($firebaseObject) {
    this.getUser = function() {
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      const rootRef = firebase.database().ref().child('users/');
      const userRef = rootRef.child(uid);
      const userObject = $firebaseObject(userRef);
      return userObject;
    };
  });
})();
