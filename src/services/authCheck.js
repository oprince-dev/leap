(function() {
  'use strict';

  angular.module('leap')
  .service('authCheck', function($location) {
    this.checkUserAuth = function() {
      console.log('checking auth');
      var user = firebase.auth().currentUser;
      if (user === null) {
        $location.path('/auth');
        return user;
      } else {
        console.log('logged in');
        return true;
      }
    };
  });
})();
