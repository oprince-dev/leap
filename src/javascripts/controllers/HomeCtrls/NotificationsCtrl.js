(function() {
  'use strict';

  angular.module('leap')
    .controller('NotificationsCtrl', function($scope, $location) {
      $scope.showNav = true;
      $scope.navigate = function(page) {
        console.log(page);
        if (page == 'tasks') {
          $location.path('home/tasks');
        } else if (page == 'stats') {
          $location.path('home/stats');
        } else if (page == 'calendar') {
          $location.path('home/calendar');
        } else if (page == 'notifications') {
          $location.path('home/notifications');
        }
      };
    });
}());
