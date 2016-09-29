(function() {
  'use strict';

  angular.module('leap')
    .controller('AuthCtrl', function($scope, $location) {
      $scope.toHome = function() {
        $location.path('home');
      };
      $scope.showNav = true;
      $scope.showFooter = true;
      $scope.create = "Create";
    });
}());
