(function () {
  'use strict';
  angular.module('leap', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngCookies', 'firebase']);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAfNApnwslXqg24PzP9AYw2o4rXM49b94k",
    authDomain: "leap-ad618.firebaseapp.com",
    databaseURL: "https://leap-ad618.firebaseio.com",
    storageBucket: "leap-ad618.appspot.com",
    messagingSenderId: "79536860504"
  };
  firebase.initializeApp(config);
}());
