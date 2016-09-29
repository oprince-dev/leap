(function() {
  'use strict';

  angular.module('leap')
    .controller('NavCtrl', function($scope, $location) {
      $scope.logo = "leap";
      $scope.login = "Login";
      $scope.dropdownToggle = false;
      $scope.dropdownItems = [
        {route: 'settings', name: 'Settings'},
        {route: 'auth', name: 'Auth'}
      ];
      $scope.navigate = function(route) {
        if (route == 'land') {
          $location.path('/');
        }
        else if (route == 'auth') {
          $location.path('auth');
        }
        else if (route == 'settings') {
          $location.path('settings');
        }
      };
    });
}());
