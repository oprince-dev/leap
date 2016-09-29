(function() {
  'use strict';

  angular.module('leap')
    .controller('HomeCtrl', function($scope, $location) {
      $scope.active = $location.path();
      $scope.showNav = true;
    });
}());
