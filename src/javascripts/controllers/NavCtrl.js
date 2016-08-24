(function() {
  'use strict';

  angular.module('leap')
    .controller('NavCtrl', function($scope, $log, $location) {
      $scope.logo = "leap";
      $scope.login = "Login";
      $scope.choices = [
        {route: 'Settings', name: 'Settings'},
        {route: 'Auth', name: 'Auth'}
      ];
      $scope.status = {
        isopen: false
      };
      $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropogation();
        $scope.status.isopen = !$scope.status.isopen;
      };
      $scope.navigate = function(route) {
        if (route == 'Auth') {
          $location.path('Auth');
        }
        else if (route == 'Settings') {
          $location.path('Settings');
        }
      };
    });
}());
