(function (){
  'use strict';
  angular.module('leap')
    .config(($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: '/src/partials/Land.html',
          controller: 'LandCtrl',
          controllerAs: 'Land'
        })
        .when('/auth', {
          templateUrl: 'src/partials/Auth.html',
          controller: 'AuthCtrl',
          controllerAs: 'Auth'
        })
        .when('/home', {
          templateUrl: 'src/partials/Home.html',
          controller: 'HomeCtrl',
          controllerAs: 'Home'
        })
        .when('/home/tasks', {
          templateUrl: 'src/partials/HomePartials/Tasks.html',
          controller: 'TasksCtrl',
          controllerAs: 'Tasks'
        })
        .when('/home/stats', {
          templateUrl: 'src/partials/HomePartials/Stats.html',
          controller: 'StatsCtrl',
          controllerAs: 'Stats'
        })
        .when('/home/calendar', {
          templateUrl: 'src/partials/HomePartials/Calendar.html',
          controller: 'CalendarCtrl',
          controllerAs: 'Calendar'
        })
        .when('/home/notifications', {
          templateUrl: 'src/partials/HomePartials/Notifications.html',
          controller: 'NotificationsCtrl',
          controllerAs: 'Notifications'
        });
      });
}());
