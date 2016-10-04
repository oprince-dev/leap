(function() {
  'use strict';

  angular.module('leap')
    .controller('HomeCtrl', function($scope, $route, $location, userObject) {
    //// Vars
      const home = this;
      home.userDB = userObject.getUser();

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
      home.checkTab = function(tab) {
        return home.tab === tab;
      };
      home.reload = function() {
        $route.reload();
      };
    });
})();
