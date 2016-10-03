(function() {
  'use strict';

  angular.module('leap')
  .service('authService', function($rootScope, $location, $timeout) {
    const user = firebase.auth().currentUser;

    this.createUser = function(username, email, password) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        $rootScope.$apply(function() {
          $location.path('/home');
        });
        return user;
      })
      .catch(function(error) {
        return error;
      });
    };

    this.loginUser = function(email, password) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        if (user !== null) {
          $rootScope.$apply(function() {
            $location.path('/home');
          });
          $rootScope.loginState = true;
        }
      })
      .catch(function(error) {
        console.log(error.message);
      });
    };

    this.logoutUser = function() {
      firebase.auth().signOut();
      $location.path('/auth');
      $rootScope.loginState = false;
    };

    this.setUserData = function(user, username, email) {
      firebase.database().ref('users/' + user.uid).set({
        username: username,
        email: email
      });
    };
  });
})();
