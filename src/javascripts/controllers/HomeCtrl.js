(function() {
  'use strict';

  angular.module('leap')
    .controller('HomeCtrl', function($scope, $location) {
      $scope.active = $location.path();
      $scope.showNav = true;
      $scope.tab = 'day';
      $scope.tabs = [{
        bat: 'day',
        title: 'Day'
      }, {
        bat: 'week',
        title: 'Week'
      }, {
        bat: 'month',
        title: 'Month'
      }];
      $scope.tabSelect = function(bat) {
        console.log(bat);
        $scope.tab = bat;
      };
      $scope.checkTab = function (tab) {
        console.log(tab);
        return $scope.tab === tab;
      };
    });
}());
