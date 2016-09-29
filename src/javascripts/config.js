(function (){
  'use strict';
  angular.module('leap')
    .config(($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: '/src/partials/Land.html',
          controller: 'LandCtrl',
        })
        .when('/auth', {
          templateUrl: 'src/partials/Auth.html',
          controller: 'AuthCtrl',
        })
        .when('/home', {
          templateUrl: 'src/partials/Home.html',
          controller: 'HomeCtrl'
        })
        .when('/home/tasks', {
          templateUrl: 'src/partials/HomePartials/Tasks.html',
          controller: 'TasksCtrl'
        })
        .when('/home/stats', {
          templateUrl: 'src/partials/HomePartials/Stats.html',
          controller: 'StatsCtrl'
        })
        .when('/home/calendar', {
          templateUrl: 'src/partials/HomePartials/Calendar.html',
          controller: 'CalendarCtrl'
        })
        .when('/home/notifications', {
          templateUrl: 'src/partials/HomePartials/Notifications.html',
          controller: 'NotificationsCtrl'
        });
      });
}());
