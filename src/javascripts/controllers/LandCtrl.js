(function() {
  'use strict';

  angular.module('leap')
    .controller('LandCtrl', function($scope, $location) {
      $scope.toAuth = function() {
        $location.path('Auth');
      };
    });
}());
