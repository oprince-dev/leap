(function() {
  'use strict';

  angular.module('leap')
    .controller('AuthCtrl', function($scope, $location) {
      $scope.toLand = function() {
        $location.path('');
      };
    });
}());
