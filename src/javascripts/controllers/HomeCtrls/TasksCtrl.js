(function() {
  'use strict';

  angular.module('leap')
    .controller('TasksCtrl', function($scope, $location) {
      $scope.active = $location.path();
      $scope.showNav = true;
    });
}());
