(function() {
  'use strict';

  angular.module('leap')
    .controller('HomeCtrl', function($location) {
    //// Vars
      const home = this;
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      home.userEmail = user.email;
      home.username = user.displayName;
      home.active = $location.path();
      home.showNav = true;
      home.tab = 'day';
      home.tabs = [{
        bat: 'day',
        title: 'Day'
      }, {
        bat: 'week',
        title: 'Week'
      }, {
        bat: 'month',
        title: 'Month'
      }];

    //// Functions
      home.tabSelect = function(bat) {
        home.tab = bat;
      };
      home.checkTab = function (tab) {
        return home.tab === tab;
      };
      home.checkAuth = function(uid) {
        if (uid === null) {
          console.log('signing out');
          firebase.auth().signOut();
          $location.path('/auth');
        }
      };
    });
})();
