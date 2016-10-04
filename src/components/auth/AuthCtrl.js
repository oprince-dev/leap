(function() {
  'use strict';

  angular.module('leap')
    .controller('AuthCtrl', function($location, $timeout, authService) {
    //// Vars
      const auth = this;
      const user = firebase.auth().currentUser;
      auth.showNav = true;
      auth.showFooter = true;
      auth.create = "Create";
      auth.login = "Login";
      auth.authSwitch = false;

    //// Functions
      auth.callCreateUser = function() {
        let createUsername = this.username;
        let createEmail = this.email;
        let createPassword = this.password;
        authService.createUser(createUsername, createEmail, createPassword).then(function(user){
          console.log('create pass');
          authService.setUserData(user, createUsername, createEmail);
        });
      };

      auth.callLoginUser = function() {
        let loginEmail = this.email;
        let loginPassword = this.password;
        authService.loginUser(loginEmail, loginPassword).then(function() {
          console.log('log pass');
        });
      };
    });
}());
