(function() {
  'use strict';

  angular.module('leap')
    .controller('AuthCtrl', function($location, $timeout) {
    //// Vars
      const auth = this;
      const user = firebase.auth().currentUser;
      auth.showNav = true;
      auth.showFooter = true;
      auth.create = "Create";
      auth.login = "Login";
      auth.authSwitch = false;

    //// Functions
      auth.createUser = function(username, email, password) {
        let createUsername = auth.username;
        let createEmail = auth.email;
        let createPassword = auth.password;
        return firebase.auth().createUserWithEmailAndPassword(createEmail, createPassword)
        .then(function(uid) {
          if (uid !== null) {
            auth.setUserData(uid, createUsername, createEmail);
            $location.path('/home');
          }
        })
        .catch(function(error) {

        });
      };

      auth.loginUser = function() {
        let loginEmail = auth.email;
        let loginPassword = auth.password;
        let uid = null;
        return firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(function(uid) {
          if (uid === null) {
            $location.path('/auth');
          } else if (uid !== null) {
            console.log(uid);
            $location.path('/home');
            $timeout();
          }
        })
        .catch(function(error) {
          console.error("Error", error);
          throw error;
        });
      };

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser);
        } else {
          console.log('not logged in');
          $location.path('/auth')
        }
      });

      auth.setUserData = function(uid, username, email) {
        firebase.database().ref('users/' + uid.uid).set({
          username: username,
          email: email
        });
      };
    });
}());
