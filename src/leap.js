(function () {
  'use strict';
  angular.module('leap', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngCookies', 'firebase']);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyATa0bYrcs26oXKoKcZgrx23-K4nm6kFCw",
    authDomain: "leap-7af11.firebaseapp.com",
    databaseURL: "https://leap-7af11.firebaseio.com",
    projectId: "leap-7af11",
    storageBucket: "",
    messagingSenderId: "860137278240"
  };
  firebase.initializeApp(config);
}());
