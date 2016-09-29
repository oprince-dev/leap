(function() {
  'use strict';

  angular.module('leap')
    .controller('HomeCtrl', function($scope, $location) {
      $scope.Tasks = function(page) {
        var route = tasks;
      };
      $scope.Stats = function() {};
      $scope.Calendar = function() {};
      $scope.Notifications = function() {};
    });
}());
