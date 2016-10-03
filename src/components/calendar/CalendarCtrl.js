(function() {
  'use strict';

  angular.module('leap')
    .controller('CalendarCtrl', function($scope, $location) {
      $scope.active = $location.path();
      $scope.showNav = true;
    });
}());
