(function() {
  'use strict';

  angular.module('leap')
    .controller('SideNavCtrl', function($scope, $location) {
      $scope.navigate = function(page) {
        if (page == 'home') {
          $location.path('home');
        } else if (page == 'tasks') {
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
