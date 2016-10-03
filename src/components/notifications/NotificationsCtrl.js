(function() {
  'use strict';

  angular.module('leap')
    .controller('NotificationsCtrl', function($scope, $location) {
      $scope.active = $location.path();
      $scope.showNav = true;
    });
}());
