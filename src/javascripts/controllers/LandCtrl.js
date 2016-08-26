(function() {
  'use strict';

  angular.module('leap')
    .controller('LandCtrl', function($scope, $location) {
      $scope.toAuth = function() {
        $location.path('Auth');
      };
      $scope.mocks = '/src/img/device-mocks.png';
      $scope.phrase = '/src/img/phrase.png';
    });
}());
