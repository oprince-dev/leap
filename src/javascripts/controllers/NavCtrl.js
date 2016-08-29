(function() {
  'use strict';

  angular.module('leap')
    .controller('NavCtrl', function($scope, $location) {
      $scope.logo = "leap";
      $scope.login = "Login";
      $scope.dropdown = function() {
        $scope.isDown = !$scope.isDown;
      };
      $scope.dropdownItems = [
        {route: 'Settings', name: 'Settings'},
        {route: 'Auth', name: 'Auth'}
      ];
      $scope.navigate = function(route) {
        if (route == 'Home') {
          $location.path('/');
        }
        else if (route == 'Auth') {
          $location.path('Auth');
        }
        else if (route == 'Settings') {
          $location.path('Settings');
        }
      };
    });
}());
