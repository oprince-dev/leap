(function() {
  'use strict';

  angular.module('leap')
    .controller('StatsCtrl', function($scope, $location) {
      $scope.active = $location.path();
      $scope.showNav = true;
    });
}());
